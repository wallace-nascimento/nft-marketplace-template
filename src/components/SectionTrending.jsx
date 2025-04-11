import Card from "./Card";
import { data } from "../data/image.js";
import Section from "./Section.jsx";

const SectionTrending = () =>{

    return(
        <Section >
            <div className="font-display pb-10 ease-in">
                <h2 className="text-[2.5rem] font-semibold ">Trending Collection</h2>
                <p className="text-[1.4rem] ">Checkout our weekly updated trending collection.</p>
            </div>
            <div className="flex justify-between transition ">
                {
                    data.map((image)=>{
                        return <Card
                                    key={image.id}
                                    primary={image.primary}
                                    secondary={image.secondary}
                                    third={image.third}
                                    avatar={image.avatar}
                                    title={image.title}
                                    titleAvatar={image.titleAvatar}
                                />
                       
                    })
                }
            </div>
        </Section>
    )
} 
export default SectionTrending;