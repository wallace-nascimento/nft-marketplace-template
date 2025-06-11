

const Box = ({ image, text }) =>{

	return(
		<div className='w-[20rem] flex items-center border border-callToAction rounded-[20px] text-Text font-display font-bold text-[1.2rem] mb-[20px]'>

			<div className='pl-[40px] pr-[20px] pt-[15px] pb-[15px] '>
				<img src={image} alt='' />
			</div>

			<div>
				<p>{text} </p>
			</div>

		</div>
	)
}

export default Box;