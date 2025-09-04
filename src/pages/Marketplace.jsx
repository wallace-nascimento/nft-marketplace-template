import { useState } from 'react';
import { data, owned } from '../data/profile';

import Nav from '../components/Nav';
import Menu from '../components/Menu';
import lupa from '../assets/marketplace/glass.png';
import List from '../components/profile/List';
import Card from '../components/CardDiscover';
import Footer from '../components/Footer';


const Marketplace = () =>{

	const [toggle, setToggle] = useState(1);

	
	const updateToggle = (id) =>{
		setToggle(id)
		
	}

	return(

		<div className='bg-background'>
			<Nav/>

			<div>
					
				<div className='pt-[80px] pb-[80px] pl-[30px] pr-[30px] md:pl-[115px] md:pr-[115px] '>
					
					<div className='text-Text'>

						<div className='text-[1.8em] md:text-5xl font-display font-semibold'>
							<h2>Browse Marketplace</h2>
						</div>

						<div className='font-display font-light text-[16px] md:text-[22px] pt-[10px] pb-[30px] '>
							<p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
						</div>
					</div>

					<div className='flex justify-between text-label text-[14px] border border-label rounded-[20px] pt-[18px] pb-[18px] pl-[20px] pr-[20px] ' >
						<input type="text" placeholder='Search your favourite NFTs' className='outline-none' /> 
						<spa>
							<img src={lupa} alt="Lupa" />
						</spa>
					</div>

				</div>

				<div>

				</div>

				<div className ='text-Text pb-[15px] md:pl-[115px] md:pr-[115px]'>
					<ul className='flex '>
						
						<List
							text='NFTs'
							toggle={toggle === 1}
							updateToggle={()=>updateToggle(1)}
							data={data}
						/>
											
						<List
							text='Collections'
							toggle={toggle === 2}
							updateToggle={()=>updateToggle(2)}
							data={owned}
						/>

						
					</ul>
				</div>

				<div className='pl-[115px] pr-[115px] pb-16 bg-backgroundSecundary' >
				
					<div className={toggle === 1 ? 'block flex flex-wrap justify-between justify-center text-Text' : 'hidden' } >
						
						{
							data.map((datas)=>{
								return <Card
		                        key={datas.id}
		                        image={datas.image}
		                        title={datas.title}
		                        imageAvatar={datas.imageAvatar}
		                        name={datas.name}
		                        price={datas.price}
		                        highest={datas.highest}
		                        id={datas.id} 
		                        variant="secundary"
		                        />
							} )
						}

					</div>

					<div className={toggle === 2 ? 'block flex flex-wrap justify-between justify-center text-Text' : 'hidden'}>
						
						{
							owned.map((owneds)=>{
								return <Card 
									key={owneds.id}
			                        image={owneds.image}
			                        title={owneds.title}
			                        imageAvatar={owneds.imageAvatar}
			                        name={owneds.name}
			                        price={owneds.price}
			                        highest={owneds.highest}
			                        id={owneds.id} 
			                        variant="secundary"
								/>
							})
						}

					</div>


				</div>	


			</div>


			<Footer/>
		</div>
	)
} 

export default Marketplace;