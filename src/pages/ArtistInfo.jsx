import { data } from '../data/artistInfo';

import Nav from '../components/Nav';
import Button from '../components/singup/Button';
import Button2 from '../components/Button';
import Card from '../components/CardDiscover';
import Footer from '../components/Footer';

import banner from '../assets/artistInfo/banner.png';
import avatar from '../assets/artistInfo/card/avatar.png';
import globe from '../assets/artistInfo/globe.png';
import arrow from '../assets/artistInfo/arrowRight.png';

const ArtistInfo = () =>{

	return(
		<div className='bg-background'>
			<Nav/>
						
			<div>
					<img src={banner} alt="Banner Image"/>
				</div>

			<div className='flex flex-col md:flex-row mb-[40px]'>
				

				<div className='pl-[7.1875rem] pr-[7.1875rem] pt-[40px] text-Text order-2 md:order-1'>
					<div>
						<div>
							<div className='text-[3rem] font-display font-semibold'>
								<h2>The Orbitians</h2>
							</div>
							<div className='text-[1.2rem] text-Textsecun font-display'>
								<p>Minted on Sep 30, 2022</p>
							</div>
						</div>

						<div className='pt-[30px] pb-[30px]'>
							<div className='text-[1.3rem] font-monoSpace text-Textsecun'>
								<p>Created By</p>
							</div>

							<div className='flex'>
								<img src={avatar} alt="Avatar"/>
								<div className='text-Text text-[1.2rem] font-display font-semibold pl-2'>
									<p>Orbitian</p>
								</div>
							</div>	
						</div>

						<div>
							<h3 className='text-Textsecun font-monoSpace text-[1.3rem]' >
								Description
							</h3>
							<div className='max-w-[605px] font-display text-[1.2rem] font-light'>
								<p>
									The Orbitians <br/> is a collection of 10,000 unique NFTs on the Ethereum blockchain,<br/> <br/>
									  There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br/> <br/>
									  They live in a metal space machines, high up in the sky and only have one foot on Earth.
                                    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
								</p>
							</div>
							
						</div>

						<div className='pt-[30px]'>
							<p className='text-Textsecun text-[1.2rem] pb-[10px] font-monoSpace'>
								Details
							</p>

							<div className='flex items-center pb-[10px]'>
								<img src={globe} alt="Globe"/>
								<p className='pl-2 text-[18px]'>View on Etherscan</p>

							</div>

							<div className='flex items-center'>
								<img src={globe} alt="Globe"/>
								<p className='pl-2 text-[18px]'>View Original</p>

							</div>
						</div>

						<div>
							<p className='text-Textsecun text-[1.2rem] pt-[30px] pb-[10px] font-monoSpace'>
								Tags
							</p>

							<div className='flex flex-col xl:flex-row text-Text font-display text-[16px]'>
								<div className='w-max bg-backgroundSecundary mb-[10px] pt-[12px] pb-[12px] pl-[30px] pr-[30px] rounded-[20px] mr-[20px]'>
									<p>ANIMATION</p>
								</div>

								<div className='w-max bg-backgroundSecundary mb-[10px] pt-[12px] pb-[12px] pl-[30px] pr-[30px] rounded-[20px] mr-[20px]'>
									<p>ILLUSTRATION</p>
								</div>

								<div className='w-max bg-backgroundSecundary mb-[10px] pt-[12px] pb-[12px] pl-[30px] pr-[30px] rounded-[20px] mr-[20px]'>
									<p>MOON</p>
								</div>

								<div className='w-max bg-backgroundSecundary mb-[10px] pt-[12px] pb-[12px] pl-[30px] pr-[30px] rounded-[20px] mr-[20px]'>
									<p>MOON</p>
								</div>

							</div>
						</div>

					</div>


				</div>

				<div className='w-max mr-auto ml-auto order-1 md:order-2 md:pl-[0] mlx:ml-[115px] md:mr-[115px]'>
					<div className='w-[295px] h-[237px] bg-backgroundSecundary mt-[40px] pt-[30px] pr-[30px] pl-[30px] rounded-[20px]  '>
					
					<div className=' text-monoSpace text-Text text-[.7rem] ' >
						<p>Auction ends in:</p>
					</div>

					<div className=' text-Text text-[3rem] font-monoSpace font-semibold '>
						<p>59:59:59</p>
					</div>
					<div className='flex text-Text font-monoSpace text-[.7rem]'>
						<p className='pl-1' >Hours</p>

						<p className='pl-14'>Minutes</p>

						<p className='pl-10'>Seconds</p>
					</div>
					
					<div className='w-full pt-[30px]'>
						<Button
							text='Place Bid'
							variant='secondary'
						/>
					</div>

				</div>
				</div>

			</div>

			<div className='mr-auto ml-auto pl-[30px] pr-[30px] lg:pl-[115px] lg:pr-[115px] pt-[80px]'>

			    <div className='w-max md:w-[100%] flex justify-between mr-auto ml-auto'>
			   	 	<div className='text-Text text-[2rem] font-display font-semibold'>
						
						<h2>More from this artist</h2>
			    	
			    	</div>

			    	<div className=' hidden md:block'>
			    		<Button2
			    			variant='seconday'
			    			text='Go To Artist Page'
			    			imageButton={arrow}
			    		/>
			    		
			    	</div>	
			    </div>

			    <div className='text-Text font-display font-semibold pb-[80px] pr-[25px] pl-[25px] '>
			    	
			    	<div className='flex flex-wrap justify-between justify-center '>
			    		{
				    		data.map((artistInfo) =>{
				    			return <Card
				    				key={artistInfo.id}
				    				name={artistInfo.name}
				    				title={artistInfo.title}
				    				image={artistInfo.image}
				    				imageAvatar={artistInfo.imageAvatar}
				    				price={artistInfo.price}
				    				highest={artistInfo.highest}

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

export default ArtistInfo;