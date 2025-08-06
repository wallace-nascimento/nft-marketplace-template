// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Interface para o PancakeSwap V2 Pair (necessário para flash loans)
interface IPancakePair {
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    function token0() external view returns (address);
    function token1() external view returns (address);
}

// Interface para o PancakeSwap V2 Router
interface IPancakeRouter {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

// Interface para o ERC20 (para manipular tokens)
interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
}

// Interface para o Flash Loan (baseado em ERC3156)
interface IERC3156FlashBorrower {
    function onFlashLoan(
        address initiator,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external returns (bytes32);
}

contract FlashLoanArbitrage is IERC3156FlashBorrower {
    address public owner;
    address public immutable pancakeFactory;
    address public immutable pancakeRouter;
    address public immutable WBNB;

    // Constantes para o flash loan
    uint256 public constant FLASH_LOAN_FEE = 50; // 0.5% de taxa (em base points)
    bytes32 private constant CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");

    // Eventos
    event FlashLoanExecuted(address token, uint256 amount, uint256 profit);
    event Received(address sender, uint256 amount);

    constructor(address _pancakeFactory, address _pancakeRouter, address _wbnb) {
        owner = msg.sender;
        pancakeFactory = _pancakeFactory;
        pancakeRouter = _pancakeRouter;
        WBNB = _wbnb;
    }

    // Modificador para restringir acesso ao dono
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // Função para iniciar o flash loan
    function initiateFlashLoan(
        address pairAddress,
        address tokenBorrow,
        uint256 amount,
        address[] memory path1,
        address[] memory path2
    ) external onlyOwner {
        // Obtém as reservas do par para garantir que há liquidez
        IPancakePair pair = IPancakePair(pairAddress);
        require(pair.token0() == tokenBorrow || pair.token1() == tokenBorrow, "Invalid token");

        // Determina qual token é o token0 e token1 no par
        bool token0IsBorrowed = pair.token0() == tokenBorrow;
        uint256 amount0Out = token0IsBorrowed ? amount : 0;
        uint256 amount1Out = token0IsBorrowed ? 0 : amount;

        // Inicia o flash loan chamando o swap com dados adicionais
        bytes memory data = abi.encode(path1, path2, amount);
        pair.swap(amount0Out, amount1Out, address(this), data);
    }

    // Callback do flash loan (chamado pelo contrato do par)
    function onFlashLoan(
        address initiator,
        address token,
        uint256 amount,
        uint256 fee,
        bytes calldata data
    ) external override returns (bytes32) {
        require(msg.sender == pancakeFactory, "Unauthorized callback");
        require(initiator == address(this), "Invalid initiator");

        // Decodifica os dados passados
        (address[] memory path1, address[] memory path2, uint256 amountBorrowed) = abi.decode(data, (address[], address[], uint256));

        // Aprova o token para o PancakeRouter
        IERC20(token).approve(pancakeRouter, amountBorrowed);

        // Executa a primeira troca (exemplo: token -> token intermediário)
        uint[] memory amountsOut1 = IPancakeRouter(pancakeRouter).swapExactTokensForTokens(
            amountBorrowed,
            0, // amountOutMin (ajuste conforme necessário)
            path1,
            address(this),
            block.timestamp + 60
        );

        // Executa a segunda troca (exemplo: token intermediário -> token original)
        uint256 amountIntermediate = amountsOut1[amountsOut1.length - 1];
        IERC20(path1[path1.length - 1]).approve(pancakeRouter, amountIntermediate);

        uint[] memory amountsOut2 = IPancakeRouter(pancakeRouter).swapExactTokensForTokens(
            amountIntermediate,
            0, // amountOutMin (ajuste conforme necessário)
            path2,
            address(this),
            block.timestamp + 60
        );

        // Calcula o lucro
        uint256 amountReceived = amountsOut2[amountsOut2.length - 1];
        uint256 amountToRepay = amountBorrowed + (amountBorrowed * FLASH_LOAN_FEE / 10000);
        require(amountReceived > amountToRepay, "No profit in arbitrage");

        // Repaga o flash loan
        IERC20(token).transfer(msg.sender, amountToRepay);

        // Calcula e transfere o lucro para o dono
        uint256 profit = amountReceived - amountToRepay;
        IERC20(token).transfer(owner, profit);

        emit FlashLoanExecuted(token, amountBorrowed, profit);

        return CALLBACK_SUCCESS;
    }

    // Função para recuperar tokens presos no contrato
    function withdrawToken(address token, uint256 amount) external onlyOwner {
        IERC20(token).transfer(owner, amount);
    }

    // Função para receber BNB (se necessário)
    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}