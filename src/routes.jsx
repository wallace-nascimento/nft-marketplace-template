import { Routes, Route } from "react-router-dom";
import App from "./App";
import NftPages from "./pages/NftPages";

const MainRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/nftPage" element={<NftPages/>} />
        </Routes>
    )
}

export default MainRoutes;