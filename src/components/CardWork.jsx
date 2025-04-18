
const Card = ({ image, title, text }) => {

    return (
        <div className='w-[20.625rem] bg-backgroundSecundary rounded-[20px]'>
            <div className='flex justify-center pt-[20.83px] pb-[20px]'>
                <img src={image} alt='Image Setup' />
            </div>
            <div className='text-center'>
                <div className='text-[1.3rem] font-semibold'>
                    <p> {title} </p>
                </div>
                <div className='pl-[30px] pt-[10px] pr-[30px] pb-[30px] text-[.8rem]'>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Card;