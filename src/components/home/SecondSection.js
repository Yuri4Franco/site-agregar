import ButtonBlue from "../buttons/ButtonBlue";
import { useEffect, useState, useRef } from "react";
import CardStyle1 from "../cards/CardStyle1";
import "./SecondSection.css";


function SecondSection() {

    const [isVisible, setIsVisible] = useState(false);
        const h1Ref = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); 
                    }
                },
                { threshold: 1.0 }
            );
    
            if (h1Ref.current) {
                observer.observe(h1Ref.current);
            }
    
            return () => observer.disconnect();
        }, []);
    

    return (
        <>
        <div className="second-section-container">
                
            <div className="second-section-container-title" >
                <h1 className="h1-titulo"> Sobre o  <span ref={h1Ref} className={`title-decoration ${isVisible ? "visible" : ""}`}>Instituto<span id="break">Agregar</span></span></h1>
                <div id="button-saiba-mais"><ButtonBlue ButtonText="SAIBA MAIS"></ButtonBlue></div>
            </div>
            <div className="second-section-container-text"><p className="p-texto"> O Instituto Agregar é um hub de Inovação sem fins lucrativos que busca o desenvolvimento regional do 
                interior do Rio Grande do Sul. Acreditamos no potencial dos talentos locais e na inovação como caminho
                para o crescimento econômico e social. Por meio de capacitação e suporte a projetos inovadores, nosso 
                objetivo é conectar empresas, empreendedores e investidores para impulsionar a região como um todo. 
                Trabalhamos em parceria com grandes executivos, especialistas em negócios e
                instituições de ensino renomadas para oferecer soluções personalizadas e de alto impacto.
            </p>
            </div>
        </div>
        </>
    );
}

export default SecondSection;