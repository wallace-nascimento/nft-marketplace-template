import { data } from '../data/work.js';
import Card from './CardWork';
import Section from './Section';

import astronauta from '../assets/astronauta.png';
import email from '../assets/email.png';
import Input from './Input.jsx';

const SectionWork = () =>{

    return(
        <Section >
            <div className='pr-10 pl-12 pb-16 lg:pr-0 lg:pl-0'>
            <div className='mb-[80px]'>
                <div className='font-display mb-[48px]'>
                    <div className="text-[2rem] md:text-[2.5rem] font-semibold ">
                        <h2 >How it works</h2>
                    </div>
                    <div className="text-[1rem] md:text-[1.3rem] font-normal">
                        <p>Find out how to get started</p>
                    </div>
                </div>

                <div className='flex flex-wrap justify-around mt-[30px]'>

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

            <div className='w-full md:bg-backgroundSecundary flex flex-col md:flex-row font-display rounded-[20px]'>
                
                   <div className='md:p-[3.75rem]  '>
                      <img src={astronauta} alt='Image Astronauta'/>
                   </div>

                   <div className='pt-[3.75rem]'>
                        <div className='text-[1.3rem] md:text-[2.5rem] font-semibold '>
                            <h2>Join Our Weekly <br></br>Digest</h2>
                        </div>
                        <div className='text-[.9rem] md:text-[1.2rem] pt-[10px] pb-[40px]'>
                            <p>Get exclusive promotions & updates <br></br>straight to your inbox.</p>
                        </div>
                       <Input/>
                   </div>

            </div>

            </div>
        </Section>
    )
}

export default SectionWork;