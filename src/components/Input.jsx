import email from '../assets/email.png';

const Input = () => {

    return (
        <div>
            <div className='flex items-center'>
                <div className=' bg-white rounded-[15px] text-background p-[18px] relative'>
                    <input type='email' placeholder='Enter your email here' className='outline-none rounded-[15px]' />
                </div>
                <div className='bg-callToAction pt-[18px] pb-[18px] pr-[3.125rem] pl-[3.125rem] rounded-[15px] absolute right-60'>
                    <button className='flex cursor-pointer'> <img src={email} alt='email' className='pr-2' /> Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Input;