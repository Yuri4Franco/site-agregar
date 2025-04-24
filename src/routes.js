import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Inicio";
import SectionParceiros2 from "./components/parceiros/SectionParceiro2";
import "./App.css";
import ScrollToTop from "./components/config/ScrollToTop";
import ConstrucaoPagina from "./pages/ConstrucaoPagina";
const AppRoutes = () => {
    return(
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/parceiros/:nomeParceiro" element={<SectionParceiros2 />} />
                <Route path= "/contato" element={<ConstrucaoPagina />} />
                <Route path= "/faca-parte" element={<ConstrucaoPagina />} />
                <Route path= "/sobre" element={<ConstrucaoPagina />} />
                <Route path= "*" element={<ConstrucaoPagina />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;