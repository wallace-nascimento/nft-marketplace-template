import Section from './Section.jsx';
import Button from './Button.jsx';

import time from '../assets/time.png';
import avatar from '../assets/avatar.png'
import eye from '../assets/eye.png'

const SectionHighlight = () =>{

    return(
        <Section >

            <div className='bg-[url(./assets/background.png)] h-screen bg-no-repeat bg-center flex items-end'>
                <div className=' bg-linear-to-t from-callToAction to-gradiente1 w-full pr-[30px] pl-[30px]'>
                    
                   <div className='  lg:pl-[115px] lg:pr-[115px] lg:pb-[60px]'> 
                        <div className='flex flex-col justify-between sm:relative'>
                            <div className=' font-display bottom-[3.75rem] left-[7.1875rem]'>
                                <div className='w-[8rem] flex justify-center bg-background pt-2 pb-2 rounded-[20px] font-light cursor-pointer'>
                                    <div className='mr-2' ><img src={avatar} alt='Avatar' /></div>
                                    <p>Shroomie</p>
                                </div>

                                <div className='text-[2rem] md:text-[2.4rem] font-semibold pt-[15px] pb-[15px]'>
                                    <h2>Magic Mashrooms</h2>
                                </div>
                               
                            </div>

                            <div className=' sm:absolute right-0 top-10 '>
                                <img src={time} alt='Image Time' />
                            </div>
                              
                        </div>

                         <div className='w-full pt-4 pb-4 md:pt-0 md:pb-0 sm:w-[12.375rem] '>
                                    <Button
                                        imageButton={eye}
                                        text="See NFT"
                                        isColor
                                    />
                                </div>
                        <div className='clear-both'>  </div>
                    

                    </div>
                </div>
            </div>
             <div className='clear-both'>  </div>
        </Section>
    )
}

export default SectionHighlight;