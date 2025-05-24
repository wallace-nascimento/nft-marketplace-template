import Button from './Button';

import image from '../assets/background-image.svg';
import avatar from '../assets/avatar.svg';
import launch from '../assets/launch.svg';
import Section from './Section';

const SectionHero = () =>{
    return(
        <Section >
                <div className='grid justify-center pl-[30px] pr-[30px]'>
                    <div className='flex flex-col md:flex-row md:justify-around'> 
                        <div className='lg:pr-[30px]'>
                            <h1 className='text-[2rem] md:text-[3rem] lg:text-[4rem] font-semibold '>Discover <br/> Digital art & <br/> Collect NFTs</h1>
                            <p className='text-[1rem] md:text-[1.2rem] '>NFT marketplace UI created with Anima for <br/>Figma. Collect,
                                buy and sell art from more <br/> than 20k NFT artists.</p>
                        </div>

                         <div className='w-[340px] md:w-max mt-[40px] md:mt-0 md:pl-[30px]'>
                            <div className='' >

                                <img src={image} alt='Image background' className=''/>

                            </div>

                            <div className='text-[1rem] '>
                                <div className='bg-backgroundSecundary pl-6 pt-4 pb-6 rounded-b-2xl'>
                                    <p className='font-semibold'>Space Walking</p>
                                    <div className='flex text-[1rem]'>
                                        <img src={avatar} alt='Avatar' />
                                        <p className='pl-2'>Animakid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                     <div className='md:mt-[-60px] lg:mt-[-120px]'>   
                       <div className=' pt-[30px] pb-6 md:w-[14rem]  '>
                            <Button
                                imageButton={launch}
                                text='Get Started'
                            />
                        </div>
                        <div className='flex '>
                            <div className=' mr-[5rem]'>
                                <p className='text-[1.2rem] lg:text-[1.8rem] font-semibold'>240k+ </p>
                                <p className='text-[1rem] lg-text-[1.5rem]'>Total Sale</p>
                            </div>
                            <div className='mr-[5rem]'>
                                <p className='text-[1.2rem] lg:text-[1.8rem] font-semibold'>100k+ </p>
                                <p className='text-[1rem] lg-text-[1.5rem]'>Auctions</p>
                            </div>
                            <div>
                                <p className='text-[1.2rem] lg:text-[1.8rem] font-semibold'>240k+ </p>
                                <p className='text-[1rem] lg-text-[1.5rem]'>Artists</p>
                            </div>
                        </div>
                      </div>  
                </div>
            </Section>
    )
}

export default SectionHero;
