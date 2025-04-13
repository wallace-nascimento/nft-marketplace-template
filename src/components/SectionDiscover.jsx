import Section from './Section.jsx';
import Button from './Button.jsx';

import eye from '../assets/eye.png';
import Card from './CardDiscover.jsx';

import { data } from '../data/discover.js';

const SectionDiscover = () =>{

    return(
        <Section>
            <div className="flex justify-between ">
                <div className="font-display">
                    <div className='text-[2.5rem] font-semibold'>
                        <h2> Discover More NFTs </h2>
                    </div>
                    <div className="text-[1.4rem] font-normal">
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

            <div className='flex justify-between'>
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