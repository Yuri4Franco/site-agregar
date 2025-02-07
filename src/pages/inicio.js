import HeaderLayout from "../layout/HeaderLayout";
import "./Inicio.css"
import HeroSection from "../components/home/HeroSection";
import FirstSection from "../components/home/FirstSection";
import SecondSection from "../components/home/SecondSection";


function Home() {
    return (
        <>
            <HeroSection />
            <HeaderLayout></HeaderLayout>
            <FirstSection></FirstSection>
            <SecondSection></SecondSection>
        </>
    );
}

export default Home;