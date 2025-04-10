import Button from './Button';

import image from '../assets/background-image.svg';
import avatar from '../assets/avatar.svg';
import launch from '../assets/launch.svg';
import Section from './Section';

const SectionHero = () =>{
    return(
        <Section >
                <div className='flex justify-between'>
                    <div className='w-[540px] '> 
                        <div >
                            <h1 className='text-[4.5rem] font-semibold'>Discover <br/> Digital art & <br/> Collect NFTs</h1>
                            <p className='text-[1.5rem]'>NFT marketplace UI created with Anima for <br/>Figma. Collect,
                                buy and sell art from more <br/> than 20k NFT artists.</p>
                        </div>
                        <div className='w-[14rem] pt-6 pb-6'>
                            <Button
                                imageButton={launch}
                                text='Get Started'
                            />
                        </div>
                        <div className='flex '>
                            <div className='pr-16'>
                                <p className='text-[2rem] font-semibold'>240k+ </p>
                                <p className='text-[1.8rem]'>Total Sale</p>
                            </div>
                            <div className='pr-16'>
                                <p className='text-[2rem] font-semibold'>100k+ </p>
                                <p className='text-[1.8rem]'>Auctions</p>
                            </div>
                            <div>
                                <p className='text-[2rem] font-semibold'>240k+ </p>
                                <p className='text-[1.8rem]'>Artists</p>
                            </div>
                        </div>
                    </div>

                    <div className='pt-6'>
                        <div><img src={image} alt='Image background' /></div>

                        <div className='text-[1.5rem]'>
                            <div className='bg-background-secundary pl-6 pt-4 pb-6 rounded-b-2xl'>
                                <p className='font-semibold'>Space Walking</p>
                                <div className='flex text-[1rem]'>
                                    <img src={avatar} alt='Avatar' />
                                    <p className='pl-2'>Animakid</p>
                                </div>
                            </div>
                        </div>
                            

                    </div>
                </div>
            </Section>
    )
}

export default SectionHero;
