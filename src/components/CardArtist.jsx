import animakid from "../assets/artist/animakid.png";

const Card = ({ id, image, name, price }) =>{

    return(
        <div className="w-full w-[315px]  md:w-[20rem] flex lg:flex-col lg:w-[14rem] items-center justify-center bg-backgroundSecundary rounded-[20px] mt-12  mr-[30px] ml-[30px] lg:mr-0 lg:ml-0">
            <div className="relative flex mr-4 sm:pt-4">

                <div className="bg-background text-center rounded-full absolute left-2 sm:left-2 sm:top-5 font-monoSpace">

                    <p className="w-[15px] h-[15px] sm:w-[30px] sm:h-[30px] text-label text-[.6rem] sm:text-[.9rem] relative top-0 sm:top-1">{id}</p>

                </div>

                <div className="w-[60px] sm:w-full mr-auto ml-auto">
                    <img src={image} alt='Image Artist' />
                </div>
            </div>
            <div className="text-center pt-4">
                <div className="text-[1.3rem] pb-2">
                    <p className="hover:text-label cursor-pointer delay-150">{name}</p>
                </div>
                <div className="flex pb-4 items-center justify-center">
                    <p className="text-[.8rem] mr-2 text-label " >Total Sales: </p > <p className="text-[.9rem] font-monoSpace">{price} ETH</p>
                </div>
            </div>

        </div>
    )
}

export default Card;