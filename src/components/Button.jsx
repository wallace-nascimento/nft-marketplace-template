import user from "../assets/user.svg";

const Button = ({ imageButton, text, variant = "secondary" }) =>{

    return(
        <div className={`h-[3.75rem] pr-6 pl-6 flex items-center justify-center rounded-2xl cursor-pointer ${
            variant === 'secondary'
            ? 'bg-callToAction'
            : 'bg-background w-[15.4rem] border-1 border-callToAction font-semibold'
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