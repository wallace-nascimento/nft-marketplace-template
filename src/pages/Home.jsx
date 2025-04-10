import SectionHero from "../components/SectionHero";
import SectionTrending from "../components/SectionTrending";
import SectionArtist from "../components/SectionArtist";


const Home = () =>{

    return(
        <main className='w-full text-Text bg-background'>
            
            <SectionHero/>
            <SectionTrending/>
            <SectionArtist />
        </main>

    )
    
}
export default Home;