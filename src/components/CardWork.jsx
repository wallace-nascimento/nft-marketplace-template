
const Card = ({ image, title, text }) => {

    return (
        <div className='flex md:flex-col justify-center items-center w-full w-[315px] md:w-[20.625rem] bg-backgroundSecundary rounded-[20px] mt-4'>
            <div className='flex justify-center p-[20px]'>
                <img src={image} alt='Image Setup' />
            </div>
            <div className='text-center pt-[20px] pb-[20px]'>
                <div className='text-[1rem] sm:text-[1.3rem] font-semibold'>
                    <p> {title} </p>
                </div>
                <div className='text-justify pl-[30px] pt-[10px] pr-[30px] text-[.7rem] sm:text-[.8rem]'>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card;