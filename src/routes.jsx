import { Routes, Route } from "react-router-dom";
import App from "./App";
import NftPages from "./pages/NftPages";
import Connect from "./pages/Connect.jsx";
import Profile from "./pages/Profile.jsx";

const MainRoutes = () =>{
    return(

        <Routes>
            <Route path="/nft-marketplace-template" element={<App/>} />
            <Route path="/connect" element={<Connect/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
       
    )
}

export default MainRoutes;