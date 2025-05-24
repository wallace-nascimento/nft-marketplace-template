import Card from "./Card";
import { data } from "../data/image.js";
import Section from "./Section.jsx";

const SectionTrending = () =>{

    return(
        <Section >
            <div className="ml-[20px] font-display pb-10 ease-in">
                <h2 className="text-[2rem] sm:text-[2.5rem] font-semibold ">Trending Collection</h2>
                <p className="text-[1rem] sm:text-[1.2rem]">Checkout our weekly updated trending collection.</p>
            </div>
            <div className="flex flex-wrap transition justify-center sm:justify-around">
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