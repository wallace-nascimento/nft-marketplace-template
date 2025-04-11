import SectionHero from "../components/SectionHero";
import SectionTrending from "../components/SectionTrending";
import SectionArtist from "../components/SectionArtist";
import SectionCollection from "../components/SectionCollection";


const Home = () =>{

    return(
        <main className='w-full text-Text bg-background'>
            
            <SectionHero/>
            <SectionTrending/>
            <SectionArtist />
            <SectionCollection/>
        </main>

    )
    
}
export default Home;