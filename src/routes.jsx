import { Routes, Route } from "react-router-dom";
import App from "./App";
import NftPages from "./pages/NftPages";
import Connect from "./pages/Connect.jsx";
import Profile from "./pages/Profile.jsx";
import SingUp from "./pages/SingUp.jsx";
import ArtistInfo from "./pages/ArtistInfo.jsx";
import Marketplace from "./pages/Marketplace.jsx";

const MainRoutes = () =>{
    return(

        <Routes>
            <Route path="/nft-marketplace-template" element={<App/>} />
            <Route path="/connect" element={<Connect/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/singup" element={<SingUp/>} />
            <Route path="/Info" element={<ArtistInfo/>} />
            <Route path="/marketplace" element={<Marketplace/>} />
        </Routes>
       
    )
}

export default MainRoutes;