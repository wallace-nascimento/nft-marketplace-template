import Section from './Section.jsx';
import Button from './Button.jsx';

import time from '../assets/time.png';
import avatar from '../assets/avatar.png'
import eye from '../assets/eye.png'

const SectionHighlight = () =>{

    return(
        <Section >

            <div className='bg-[url(./assets/background.png)] h-screen bg-no-repeat relative bg-bottom'>
                <div className='bg-linear-to-t from-callToAction to-gradiente1 w-full h-full absolute bottom-0'>
                    <div className='relative w-full h-full'>
                        <div className='absolute font-display bottom-[3.75rem] left-[7.1875rem]'>
                            <div className='w-[8rem] flex justify-center bg-background pt-2 pb-2 rounded-[20px] font-light cursor-pointer'>
                                <div className='mr-2' ><img src={avatar} alt='Avatar' /></div>
                                <p>Shroomie</p>
                            </div>

                            <div className='text-[2.4rem] font-semibold pt-[15px] pb-[15px]'>
                                <h2>Magic Mashrooms</h2>
                            </div>
                            <div className='w-[12.375rem]'>
                                <Button
                                    imageButton={eye}
                                    text="See NFT"
                                    isColor
                                />
                            </div>
                        </div>

                        <div className='absolute bottom-[3.75rem] right-[7.1875rem] '>
                            <img src={time} alt='Image Time' />
                        </div>
                    </div>
                </div>
            </div>

        </Section>
    )
}

export default SectionHighlight;