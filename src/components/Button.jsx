import user from "../assets/user.svg";

const Button = ({ imageButton }) =>{

    return(
        <div className="bg-callToAction h-[3.75rem] pr-6 pl-6 flex items-center justify-center rounded-2xl">
            <div className="mr-2">
                <img src={imageButton} alt="imageButton" />
            </div>
            <buton>
                Sign Up
            </buton>
        </div>
    )
}

export default Button;