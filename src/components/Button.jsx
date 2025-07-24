import user from "../assets/user.svg";

const Button = ({ imageButton, text, onclick, variant = "secondary", isColor = false }) =>{

    return(
        <div className={`font-display h-[3.75rem] pr-6 pl-6 flex items-center justify-center rounded-[20px] cursor-pointer 
            hover:bg-bgHover hover:rounded-2xl delay-300 font-semibold  ${
            variant === 'secondary'
            ? 'bg-callToAction'
            : 'bg-background pl-12 pr-12 border-1 border-callToAction font-semibold hover:rounded-2xl text-Text'
        }
            ${isColor && 'bg-white text-black hover:bg-gray-300'}
        `}>
            <div className="mr-2">
                <img src={imageButton} alt="imageButton" />
            </div>
            <buton>
                {text}
                {onclick}
            </buton>
        </div>
    )
}

export default Button;