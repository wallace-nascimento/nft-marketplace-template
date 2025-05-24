import SectionHero from "../components/SectionHero";
import SectionTrending from "../components/SectionTrending";
import SectionArtist from "../components/SectionArtist";
import SectionCollection from "../components/SectionCollection";
import SectionDiscover from "../components/SectionDiscover";
import SectionHighlight from "../components/SectionHighlight";
import SectionWork from "../components/SectionWork";
import Footer from "../components/Footer";

import Section from '../components/Section';


const Home = () =>{

    return(
        < div >
            <SectionHero/>
            <SectionTrending/>
            <SectionArtist />
            <SectionCollection/>
            <SectionDiscover />
            <SectionHighlight/>
            <SectionWork/>
            <Footer/>
        </ div>

    )
    
}
export default Home;