const Button = ({ text, onclick, variant }) =>{

    return(
        <div className={` font-display h-[3rem] bg-callToAction text-Text pr-6 pl-6 flex items-center justify-center rounded-[20px] cursor-pointer 
            hover:bg-bgHover hover:rounded-2xl delay-300 font-semibold  ${
            variant === 'secondary'
            ? 'w-full'
            : 'w-[20.625rem]'

    }`}>
            <buton>
                {text}
                {onclick}
            </buton>
        </div>
    )
}

export default Button;