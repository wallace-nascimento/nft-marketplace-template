import primary from "../assets/card/card1/primary.png";
import secundary from "../assets/card/card1/secondary.png";
import secondary1 from "../assets/card/card1/secondary.png";
import avatar from "../assets/card/card1/Avatar.png";


const Card = () =>{

    return(
        <div className="w-[20.6rem] pb-16 ">
            <div>
                <div>
                    <img src={primary} alt="Card" />
                </div>
                <div className="flex justify-between pt-2 pb-4">
                    <img src={secundary} alt="Card" />
                    <img src={secondary1} alt="Card" />
                    <div className="w-[100px] h-[100px] bg-callToAction rounded-[20px] flex items-center justify-center font-monoSpace text-[1.3rem]">
                        <p>1025+</p>
                    </div>
                </div>
            </div>

            <div>
                <p>DSGN Animals</p>
                <div className="flex items-center pt-2">
                    <img src={avatar} alt="Card" />
                    <p className="pl-2 text-[.7rem]">MrFox</p>

                </div>
            </div>
        </div>
    )
}

export default Card;