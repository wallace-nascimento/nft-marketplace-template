import Section from './Section.jsx';
import Button from './Button.jsx';

import eye from '../assets/eye.png';
import Card from './CardDiscover.jsx';

import { data } from '../data/discover.js';

const SectionDiscover = () =>{

    return(
        <Section>
            <div className="flex flex-col md:flex-row justify-between pl-6 pr-6 lg:pl-0 lg:pr-0  ">
                <div className="font-display pb-6 md:pb-0">
                    <div className='text-[2rem] md:text-[2.5rem] font-semibold'>
                        <h2> Discover More NFTs </h2>
                    </div>
                    <div className="text-[1rem] md:text-[1.4rem] font-normal">
                        <p>Explore new trending NFTs</p>
                    </div>
                </div>

                <div>
                    <Button 
                        text= "See All"
                        imageButton= {eye}
                        variant = "primary"

                    />
                </div>

            </div>

            <div className='flex flex-wrap justify-around'>
               {
                data.map((discover)=>{
                    return  <Card
                        key={discover.id}
                        image={discover.image}
                        title={discover.title}
                        imageAvatar={discover.imageAvatar}
                        name={discover.name}
                        price={discover.price}
                        highest={discover.highest}
                    />
                })
               }
            </div>

        </Section>
    )
}

export default SectionDiscover;