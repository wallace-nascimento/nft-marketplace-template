import Card from "./Card";
import { data } from "../image.js";

const SectionTrending = () =>{

    return(
        <section className="w-[65.6rem] mr-auto ml-auto pt-16 text-Text">
            <div className="font-display pb-10">
                <h2 className="text-[2.5rem] font-semibold">Trending Collection</h2>
                <p className="text-[1.4rem] ">Checkout our weekly updated trending collection.</p>
            </div>
            <div className="flex ">
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
            


        </section>
    )
} 
export default SectionTrending;