import animakid from "../assets/artist/animakid.png";

const Card = ({ id, image, name, price }) =>{

    return(
        <div className="w-[14rem] bg-backgroundSecundary rounded-[20px] mt-12 ">
            <div className="flex pt-6 relative">

                <div className="bg-background text-center rounded-full absolute left-4 font-monoSpace">

                    <p className="w-[30px] h-[30px] text-label text-[.9rem] relative top-1">{id}</p>

                </div>

                <div className="mr-auto ml-auto">
                    <img src={image} alt='Image Artist' />
                </div>
            </div>
            <div className="text-center pt-4">
                <div className="text-[1.3rem] pb-2">
                    <p>{name}</p>
                </div>
                <div className="flex pb-4 items-center justify-center">
                    <p className="text-[.8rem] mr-2 text-label " >Total Sales: </p > <p className="text-[.9rem] font-monoSpace">{price} ETH</p>
                </div>
            </div>

        </div>
    )
}

export default Card;