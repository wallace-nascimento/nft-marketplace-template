import Section from './Section.jsx';
import Card from './CardCollection.jsx';

import { data } from '../data/collection.js';

const SectionCollection = () =>{

    return(
        <Section>

        <div className='pl-6 pr-6 lg:pl-0 lg:pr-0'>

            <div className="text-[2rem] sm:text-[2.5rem] font-semibold">
                <h2> Browse Categories </h2>
            </div>

            <div className='flex flex-wrap  justify-around ease-in'>
                {
                    data.map((collection)=>{
                        return <Card
                            key={collection.id}
                            name={collection.name}
                            image={collection.image}
                        
                        />
                    })
                }
            </div>

        </div>    
        </Section>
    )
}

export default SectionCollection;