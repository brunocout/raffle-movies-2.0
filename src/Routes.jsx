import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suggest from "./pages/Suggest/Suggest";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/raffle-movies-website/" element={<Home/>}/>
            <Route path="/raffle-movies-website/suggest" element={<Suggest/>}/>
        </Routes>
     );
}
 
export default MainRoutes;