import Section from "./Section.jsx";
import Button from "./Button.jsx";
import vector from "../assets/vector.png";
import Card from "./CardArtist.jsx";

import { data } from "../data/artist.js";

const SectionArtist = () =>{

    return(
        <Section >
            <div className="flex flex-col md:flex-row justify-between mr-[30px] ml-[30px]">
                <div className="font-display">
                    <div className="text-[2rem] sm:text-[2.5rem] font-semibold">
                        <h2>Top Creators</h2>
                    </div>
                    <div className="text-[1rem] sm:text-[1.4rem] ">
                        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
                    </div>
                </div>
                
                    <div className="h-full mt-8">
                        <Button
                            imageButton={vector}
                            text="View Rankings"
                            variant="primary"
                        />
                    </div>
            </div>

            <div className="flex flex-wrap justify-around">
                {
                    data.map((artist)=>{
                        return <Card 
                            key={artist.id}
                            id={artist.id}
                            image={artist.image}
                            name={artist.name}
                            price={artist.price}
                        />
                    })
                }
            </div>
            
        </Section>
    )
}

export default SectionArtist;