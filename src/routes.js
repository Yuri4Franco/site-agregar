import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Inicio";
import SectionParceiros2 from "./components/parceiros/SectionParceiro2";
import "./App.css";
import ScrollToTop from "./components/config/ScrollToTop";
const AppRoutes = () => {
    return(
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/parceiros/:nomeParceiro" element={<SectionParceiros2 />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;