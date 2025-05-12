import ButtonBlue from "../buttons/ButtonBlue";
import { useEffect, useState, useRef } from "react";
import "./SecondSection.css";
import ButtonBlack from "../buttons/ButtonBlack";
import Divisor11 from "../divisor/Divisor11";

function SecondSection() {

    const h1Refs = useRef([]);
    const [visibleStates, setVisibleStates] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleStates(prevState => ({
                            ...prevState,
                            [entry.target.dataset.id]: true
                        }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1.0 }
        );

        h1Refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <>
        <Divisor11/>
            <div className="second-section-container">

                <div className="second-section-container-title" >
                    <h1 id="second-section-sobre">SOBRE O</h1> <h1>INSTITUTO</h1><h1>AGREGAR</h1>
                </div>
                <div>
                    <div
                        ref={el => h1Refs.current[0] = el}
                        data-id="div1"
                        className={`background-effect-1 ${visibleStates["div1"] ? "visible" : ""}`}>
                    </div>
                    <p className="p-texto">Instituto Agregar é um hub de inovação sem fins lucrativos que atua para fortalecer o desenvolvimento da região Noroeste do Rio Grande do Sul. Acreditamos no potencial das pessoas, das empresas e do território como motores de transformação.</p>
                    <p className="p-texto">Conectamos talentos, empreendedores e organizações por meio de programas de capacitação, experiências práticas e suporte a projetos inovadores. Nosso papel é criar pontes entre o presente e o futuro, estimulando soluções sustentáveis, tecnológicas e colaborativas.</p>
                    <p className="p-texto">Trabalhamos lado a lado com empresas, especialistas e instituições de ensino para gerar impacto real e positivo em toda a região.</p>
                    <div
                        ref={el => h1Refs.current[1] = el}
                        data-id="div2"
                        className={`background-effect-2 ${visibleStates["div2"] ? "visible" : ""}`}>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondSection;