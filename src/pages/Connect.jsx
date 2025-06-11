import Nav from '../components/Nav';
import Section from '../components/Section';
import Footer from '../components/Footer';
import Box from '../components/connect/Box';

import placeholder from '../assets/connect/placeholder.png';
import metamask from '../assets/connect/metamask.png';
import walletConnect from '../assets/connect/walletConnect.png';
import coinbase from '../assets/connect/coinbase.png'; 
const Sign = () =>{

	return(

		<div className="bg-background font-display ">
			<Nav/>
			<div className='ml:flex max-w-[80rem] ml-auto mr-auto '> 

				<div className=' md:mr-[60px] sm:ml-auto sm:mr-auto sm:w-max ml:mr-0 ml:ml-0 ml:pr-[60px]'> 
					<img src={placeholder} alt='placeholder' />	
				</div>

				<div className='w-min pt-[30px] ml:pt-0 lg:pt-[100px] md:pr-[20px] mr-auto ml-auto ml:mr-0 ml:ml-0'> 

					<div className='text-Text'>

						<div className='text-[2.5rem] font-semibold'>
							<h2>Connect Wallet </h2> 
						</div>

						<div className='text-Text text-[1.1rem] font-light'> 
							<p>Choose a wallet you want to connect. 
							<br/>
							There are several wallet providers. </p>
						</div>
						
						
						
					</div>

					<div className='pt-[40px]'>

						<Box 
							image={metamask}
							text='Metamask'
						/>

						<Box 
							image={walletConnect}
							text='Wallet Connect'
						/>

						<Box 
							image={coinbase}
							text='Coinbase'
						/>

					</div>

				</div>

			</div>

			<Footer/>
		</div>

	)
} 

export default Sign;