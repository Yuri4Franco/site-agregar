import HeaderLayout from "../layout/HeaderLayout";
import "./Inicio.css"
import HeroSection from "../components/home/HeroSection";
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";
import ThirdSection from "../components/home/ThirdSection";
import FooterLayout from "../layout/FooterLayout";
import OqFazemos from "../components/home/OqFazemos";
import QuemSomos from "../components/home/QuemSomos";

function Home() {
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