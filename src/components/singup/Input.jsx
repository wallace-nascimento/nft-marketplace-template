
const Input = ({ placeholder, avatar }) =>{

	return(
		<div className='w-[20.625rem] bg-white rounded-[20px]'>
			<div className='relative'>

				<div className='w-full h-[46px] font-display bg-Text rounded-[15px] text-background p-[12px] pl-[50px] mb-[16px] '>
					<input type='text' placeholder={placeholder} className='outline-none rounded-[15px] text-background' />
				</div>

				<div className='absolute top-3 left-[20px] bottom-[10px]'>
					<img src={avatar} alt="User" />
				</div>
					
			</div>

		</div>

	)
}

export default Input;

