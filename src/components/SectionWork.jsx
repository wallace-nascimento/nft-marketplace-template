import { data } from '../data/work.js';
import Card from './CardWork';
import Section from './Section';

import astronauta from '../assets/astronauta.png';
import email from '../assets/email.png';

const SectionWork = () =>{

    return(
        <Section>

            <div className='mb-[80px]'>
                <div className='font-display mb-[48px]'>
                    <div className="text-[2.5rem] font-semibold ">
                        <h2 >How it works</h2>
                    </div>
                    <div className="text-[1.3rem] font-normal">
                        <p>Find out how to get started</p>
                    </div>
                </div>

                <div className='flex justify-between'>

                   {
                    data.map((work)=>{
                        return <Card
                            key={work.id}
                            image={work.image}
                            title={work.title}
                            text={work.text}
                        />
                    })
                   }

                </div>

            </div>

            <div className='w-full bg-backgroundSecundary flex font-display rounded-[20px]'>
                
                   <div className='p-[3.75rem] '>
                      <img src={astronauta} />
                   </div>

                   <div className='pt-[3.75rem]'>
                        <div className='text-[2.5rem] font-semibold '>
                            <h2>Join Our Weekly <br></br>Digest</h2>
                        </div>
                        <div className='text-[1.2rem] pt-[10px] pb-[40px]'>
                            <p>Get exclusive promotions & updates <br></br>straight to your inbox.</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' bg-white rounded-[15px] text-background p-[18px] relative'>
                                <input type='email' placeholder='Enter your email here' className='outline-none rounded-[15px]'/>
                            </div>
                            <div className='bg-callToAction pt-[18px] pb-[18px] pr-[3.125rem] pl-[3.125rem] rounded-[15px] absolute right-60'>
                                <span className='flex'> <img src={email} alt='email' className='pr-2'/> Subscribe</span> 
                            </div>
                        </div>
                   </div>

            </div>

        </Section>
    )
}

export default SectionWork;