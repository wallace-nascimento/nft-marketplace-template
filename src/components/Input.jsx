import email from '../assets/email.png';

const Input = () => {

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row content-center items-center justify-center'>
                <div className='w-full h-[46px] bg-white rounded-[15px] text-background p-[12px] mb-[16px] md:mb-0'>
                    <input type='email' placeholder='Enter your email here' className='outline-none rounded-[15px]' />
                </div>
                <div className='w-full h-[46px] bg-callToAction rounded-[15px] grid justify-center items-center md:pr-[50px] md:pl-[62px] md:ml-[-40px] '>
                    <button className='cursor-pointer text-center flex'> <img src={email} alt='Image Email' className='pr-2'/> Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Input;