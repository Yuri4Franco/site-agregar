import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Inicio";
import "./App.css";
import ScrollToTop from "./components/config/ScrollToTop";
import SectionParceiros from "./components/parceiros/SectionParceiro";
const AppRoutes = () => {
    return(
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/parceiros/:nomeParceiro" element={<SectionParceiros/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;