

const Card = ({ name, image }) =>{

    return(
        <div className="w-[15rem] mt-8">
            <div className="cursor-pointer">
                <img src={image} alt="Image Collection" />
            </div>
            <div className="bg-backgroundSecundary pl-6 pt-4 pb-6 rounded-b-[20px] font-semibold">
                <p className="hover:text-label cursor-pointer delay-150"> {name} </p>
            </div>
        </div>
    )
}

export default Card;