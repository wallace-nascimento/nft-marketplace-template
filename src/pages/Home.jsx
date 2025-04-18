import SectionHero from "../components/SectionHero";
import SectionTrending from "../components/SectionTrending";
import SectionArtist from "../components/SectionArtist";
import SectionCollection from "../components/SectionCollection";
import SectionDiscover from "../components/SectionDiscover";
import SectionHighlight from "../components/SectionHighlight";
import SectionWork from "../components/SectionWork";


const Home = () =>{

    return(
        <main className='w-full text-Text bg-background'>
            
            <SectionHero/>
            <SectionTrending/>
            <SectionArtist />
            <SectionCollection/>
            <SectionDiscover />
            <SectionHighlight/>
            <SectionWork/>
        </main>

    )
    
}
export default Home;