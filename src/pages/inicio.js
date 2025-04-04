import HeaderLayout from "../layout/HeaderLayout";
import "./Inicio.css"
import HeroSection from "../components/home/HeroSection";
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";
import ThirdSection from "../components/home/ThirdSection";
import FooterLayout from "../layout/FooterLayout";
import Divisor1 from "../components/divisor/Divisor1";
import Divisor2 from "../components/divisor/Divisor2";


function Home() {
    return (
        <div className="home">
            <HeroSection />
            <HeaderLayout></HeaderLayout>
            <div className="sections-home">
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
                <ThirdSection></ThirdSection>
            </div>
            <FooterLayout></FooterLayout>
        </div>
    );
}

export default Home;