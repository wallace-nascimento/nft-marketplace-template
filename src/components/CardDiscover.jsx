
const Card = ({ image, title, imageAvatar, name, price, highest }) =>{

    return(
        <div className='w-[21rem] pt-12 pr-4'>
            <div>
                <img src={image} alt="Image Dicover" />
            </div>

             <div className='bg-backgroundSecundary rounded-b-[20px]'>
    
                <div className='pl-[1.875rem] pt-[1.25rem]'>
                    <div className='text-[1.3rem] mb-[5px]'>
                        <p>{ title }</p>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <div className='pr-2'>
                            <img src={imageAvatar} alt='Avatar Dicover' />
                            </div>
                        <div className='font-monoSpace text-[.8rem]'>
                            <p> { name } </p>
                        </div>
                    </div>

                </div>

                <div className='flex justify-between pl-[1.875rem] pt-[1.25rem] font-monoSpace' >
                    <div>
                        <div>
                            <p className='text-Textsecun text-[.7rem]'>Price</p>
                            <p className='text-[.9rem]'> { price } ETH</p>
                        </div>
                    </div>

                    <div className='pr-[1.875rem] pb-[1.5625rem]'>
                        <div>
                            <p className='text-Textsecun text-[.7rem]'>Highest Bid</p>
                            <p className='text-[.9rem]'> { highest } </p>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Card;