

const List = ({ toggle, name, updateToggle, data,text }) =>{

	return(
		<div className=' mr-auto ml-auto  '>
			
			<il className={toggle ? ' border-b-1 border-Textsecun  pb-[18px] text-[1rem] md:text-[1.5rem]  text-display font-semibold pl-[1em] pr-[1em] md:pl-[4rem] md:pr-[4rem] pt-[15px] cursor-pointer' : 
			'border-b-0 text-Textsecun text-[1rem] md:text-[1.5rem] pl-[1em] pr-[1em] md:pl-[4em] md:pr-[4em] pt-[15px] pb-[15px] cursor-pointer'} 
			onClick={updateToggle}>

				{text} <span className={toggle ? `text-[1rem] bg-Textsecun rounded-full font-normal font-monoSpace pr-[6px] pl-[6px]` : 
					`text-[1rem] rounded-full font-normal font-monoSpace pr-[6px] pl-[6px]`
				}>{data.length} </span>
			</il>


		</div>			
	)
}

export default List;