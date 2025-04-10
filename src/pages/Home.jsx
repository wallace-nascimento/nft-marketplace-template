import SectionHero from "../components/SectionHero";
import SectionTrending from "../components/SectionTrending";


const Home = () =>{

    return(
        <main className='w-full text-Text bg-background'>
            
            <SectionHero/>
            <SectionTrending/>
            
        </main>

    )
    
}
export default Home;