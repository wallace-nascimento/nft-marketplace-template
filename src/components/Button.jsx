import user from "../assets/user.svg";

const Button = ({ imageButton, text, variant = "secondary" }) =>{

    return(
        <div className={`h-[3.75rem] pr-6 pl-6 flex items-center justify-center rounded-[20px] cursor-pointer 
            hover:bg-bgHover hover:rounded-2xl delay-300  ${
            variant === 'secondary'
            ? 'bg-callToAction'
            : 'bg-background pl-12 pr-12 border-1 border-callToAction font-semibold hover:rounded-2xl'
        }`}>
            <div className="mr-2">
                <img src={imageButton} alt="imageButton" />
            </div>
            <buton>
                {text}
            </buton>
        </div>
    )
}

export default Button;