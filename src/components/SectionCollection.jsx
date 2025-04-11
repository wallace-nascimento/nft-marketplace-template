import Section from './Section.jsx';
import Card from './CardCollection.jsx';

import { data } from '../data/collection.js';

const SectionCollection = () =>{

    return(
        <Section>
            <div className="text-[2.5rem] font-semibold">
                <h2> Browse Categories </h2>
            </div>

            <div className='flex flex-wrap justify-between ease-in'>
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
        </Section>
    )
}

export default SectionCollection;