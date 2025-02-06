import HeaderLayout from "../layout/HeaderLayout";
import "./Inicio.css"
import HeroSection from "../components/home/HeroSection";
import FirstSection from "../components/home/FirstSection";


function Home() {
    return (
        <>
            <HeroSection />
            <HeaderLayout></HeaderLayout>
            <FirstSection></FirstSection>
        </>
    );
}

export default Home;