import Button from '../components/singup/Button';
import Input from '../components/singup/Input';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

import image from '../assets/singup/image.png';

import user from '../assets/singup/user.png';
import email from '../assets/singup/email.png';
import lockKey from '../assets/singup/lockKey.png';

	
const SignUp = () =>{

	return(
		<div  className='bg-background mr-auto ml-auto'>
			<Nav/>


			<div className='md:flex'>

				<div>
					<img src={image} alt='Image' />
				</div>

				<div className='flex flex-col items-center pt-[30px] md:pt-0 lg:pt-[6.25rem] md:pl-[3.75rem] sm:pr-[15px]'>
				
					<div className='text-Text font-display pb-[2.5rem]'>
						
						<div className='text-[2rem] md:text-[2.5rem] font-semibold'>
							<h2>Create account</h2>
						</div>
						<div className='text-[1rem] md:text-[1.2rem] '>
							<p>Welcome! enter your details and start <br/> Creating, collecting and selling NFTs.</p>
						</div>

					</div>

					<div>
						
						<Input
							placeholder='Username'
							avatar={user}
						/>

						<Input
							placeholder='Email Address'
							avatar={email}
						/>	

						<Input
							placeholder='Password'
							avatar={lockKey}
						/>	

						<Input
							placeholder='Confirm Password'
							avatar={lockKey}
						/>

						<Button 
							text='Create account'
						/>	


					</div>

					


				</div>
				
			</div>

			<Footer/>

		</div>
	)
} 

export default SignUp;