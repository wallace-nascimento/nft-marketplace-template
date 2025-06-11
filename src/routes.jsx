import { Routes, Route } from "react-router-dom";
import App from "./App";
import NftPages from "./pages/NftPages";
import Connect from "./pages/Connect.jsx";

const MainRoutes = () =>{
    return(

        <Routes>
            <Route path="/nft-marketplace-template" element={<App/>} />
            <Route path="/connect" element={<Connect/>} />
        </Routes>
       
    )
}

export default MainRoutes;