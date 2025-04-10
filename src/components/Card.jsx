// import primary from "../assets/card/card1/primary.png";
// import secundary from "../assets/card/card1/secondary.png";
// import secondary1 from "../assets/card/card1/secondary.png";
// import avatar from "../assets/card/card1/avatar.png";


const Card = ({ primary, secondary, third, avatar, title, titleAvatar }) =>{

    return(
        
            <div className="w-[21rem] flex pb-16">
                <div className="pr-6">
                    <div>
                        <div>
                            <img src={primary} alt="Card" />
                        </div>
                        <div className="flex justify-between pt-2 pb-4 cursor-pointer">
                            <img src={secondary} alt="Card" />
                            <img src={third} alt="Card" />
                            <div className="w-[100px] h-[100px] bg-callToAction rounded-[20px] flex items-center justify-center font-monoSpace text-[1.3rem]">
                                <p>1025+</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>{title}</p>
                        <div className="flex items-center pt-2 cursor-pointer">
                            <img src={avatar} alt="Card" />
                            <p className="pl-2 text-[.7rem]">{titleAvatar}</p>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Card;