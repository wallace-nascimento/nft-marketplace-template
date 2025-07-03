import { useState, useEffect } from 'react';
import { data, owned,collection } from '../data/profile.js';

import Card from '../components/CardDiscover';
import List from '../components/profile/List';
import Section from '../components/Section';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Pagina from '../components/Pagina';

import backgound from '../assets/profile/background.png';
import avatar from '../assets/profile/avatar.png';

import instagramLogo from '../assets/instagramLogo.png';
import discordLogo from '../assets/discordLogo.png';
import youtubeLogo from '../assets/youtubeLogo.png';
import twitterLogo from '../assets/twitterLogo.png';
import globe from '../assets/globe.png';

import copy from '../assets/profile/copy.png';
import plus from '../assets/profile/plus.png';

const Profile =()=>{

	const [toggle, setToggle] = useState(1);

	
	const updateToggle = (id) =>{
		setToggle(id)
		
	}

	

	return(
		<div className='bg-background '>
			<Nav/>

			<div className='relative'>

				<img src={backgound} alt="" />

				<div className='absolute bottom-[-50px] left-[115px]'>

					<img src={avatar} alt=""/>
					
				</div>
			</div>

			<div className='flex flex-col ml:flex-row justify-between border-b border-Textsecun pl-[30px] pr-[40px] '>

				<div className='text-Text ml:pl-[115px] pt-[80px] pb-[30px]'>
					<div className='text-[3rem] font-display'>
						<h2>Animakid</h2>
					</div>

				<div className='flex'>

					<div className='pr-16'>
						<div className='text-[1.6rem] font-bold font-monoSpace'>
							<p>250k+</p>
						</div>
						<div className='font-display text-[1.2rem] pt-1'>
							<p>Volume</p>
						</div>
					</div>

					<div className='pr-16'>
						<div className='text-[1.6rem] font-bold font-monoSpace'>
							<p>50+</p>
						</div>
						<div lassName='font-display text-[1.2rem] pt-1'>
							NFTs Sold
						</div>
						
					</div>

					<div>
						<div className='text-[1.6rem] font-bold font-monoSpace'>
							<p>3000+</p>
						</div>
						<div lassName='font-display text-[1.2rem] pt-1'>
							<p>Followers</p>
						</div>
						
					</div>

					
				</div>

				<div className='pt-[30px] pb-[30px] '>
					<div className='text-Textsecun font-monoSpace font-semibold'>

						<p>Bio</p>

					</div> 
						
					<div className='text-display text-[1.2rem] pt-2'>
						<p>The internet's friendliest designer kid.</p>
					</div>
					
				</div>

				<div className='text-Textsecun font-monoSpace font-semibold'>
					<p>Links</p>
					<div className='flex pt-[10px]'>
						<img src={globe} alt="Globe" className='pr-[10px]' />
						<img src={discordLogo} alt="Discord" className='pr-[10px]'/>
						<img src={youtubeLogo} alt="Youtube" className='pr-[10px]'/>
						<img src={twitterLogo} alt="Twitter" className='pr-[10px]'/>
						<img src={instagramLogo} alt="Instagram" className='pr-[10px]'/>
					</div>
					
				</div>
			</div>	
			
				<div className='w-max-[11.625rem] pb-[20px] ml:pr-[115px] flex flex-col ml:flex-row ml:pt-[80px] text-Text'>
				
				  <div className='ml:pr-4 pb-4'>
				  	 <Button 
		   				imageButton={copy}
		   				text='0xc0E3...B79C'
				   	/>
				  </div>

				   <Button 
					   	imageButton={plus}
					   	text='Follow'
					   	variant = 'secundary'
				   />

				</div>

			</div>

			

			<div className ='text-Text pb-[15px] md:pl-[115px] md:pr-[115px]'>
				<ul className='flex'>
					
						<List
						text='Created'
						toggle={toggle === 1}
						updateToggle={()=>updateToggle(1)}
						data={data}
						/>
										
					<List
						text='Owned'
						toggle={toggle === 2}
						updateToggle={()=>updateToggle(2)}
						data={owned}
					/>

					<List
						text='Collection'
						toggle={toggle === 3}
						updateToggle={()=>updateToggle(3)}
						data={collection}
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

					<div className={toggle === 3 ? 'block flex flex-wrap justify-between justify-center text-Text' : 'hidden'}>
						
						{
							collection.map((collections)=>{
								return <Card
									key={collections.id}
			                        image={collections.image}
			                        title={collections.title}
			                        imageAvatar={collections.imageAvatar}
			                        name={collections.name}
			                        price={collections.price}
			                        highest={collections.highest}
			                        id={collections.id}
			                        variant="secundary" 
								/>
							})
						}

					</div>

				</div>
	
			<Footer/>
		</div>
	)
}

export default Profile;