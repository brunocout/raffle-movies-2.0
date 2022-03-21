import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Suggest from "./pages/Suggest/Suggest";

const MainRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/suggest" element={<Suggest/>}/>
        </Routes>
     );
}
 
export default MainRoutes;