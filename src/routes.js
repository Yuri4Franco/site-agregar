import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Inicio";
import "./App.css";
import ScrollToTop from "./components/config/ScrollToTop";
const AppRoutes = () => {
    return(
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;