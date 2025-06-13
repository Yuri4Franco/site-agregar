import HeaderLayout from "../layout/HeaderLayout";
import "./Inicio.css"
import HeroSection from "../components/home/HeroSection";
import ThirdSection from "../components/home/ThirdSection";
import FooterLayout from "../layout/FooterLayout";
import OqFazemos from "../components/home/OqFazemos";
import QuemSomos from "../components/home/QuemSomos";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                // Espera pequeno para garantir que tudo carregou
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);
    return (
        <div className="home">
            <HeroSection></HeroSection>
            <HeaderLayout></HeaderLayout>
            <div className="sections-home">
                <QuemSomos></QuemSomos>
                <OqFazemos></OqFazemos>
                <ThirdSection></ThirdSection>
            </div>
            <FooterLayout></FooterLayout>
        </div>
    );
}

export default Home;