import { Link } from 'react-router-dom';

const NftPages =()=>{

    return(
        <div className='flex flex-col'>
            <Link to='/nftPage' className="">NFT Pages</Link>

            <div className="order-2 bg-blue-900 ">
                item 01
            </div>

             <div className='order-1 bg-white '>
                item 02
            </div>


        </div>
    )
}

export default NftPages;