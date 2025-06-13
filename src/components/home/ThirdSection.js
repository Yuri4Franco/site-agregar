import "./ThirdSection.css";
import CardParceiro from "../cards/CardParceiro";
import parceiros from "../config/parceiros";
import { useEffect, useState, useRef } from "react";

function ThirdSection() {

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


    const mantenedores = parceiros.filter(p => p.categoria === "mantenedor");
    const associados = parceiros.filter(p => p.categoria === "associado");

    return (
        <section id="vitrine-agregar">
            <div className="third-section-container">
                <h1>VITRINE DOS NOSSOS PARCEIROS</h1>
                <h2>Conheça os parceiros que caminham ao lado do Instituto Agregar na transformação da região Noroeste do Rio Grande do Sul. Clique em cada um para descobrir mais sobre suas atuações e contribuições!</h2>
                <span>NOSSOS</span >
                <h1 className="h1-titulo">MANTENEDORES</h1>
                <div
                    ref={el => h1Refs.current[0] = el}
                    data-id="div1"
                    className={`background-effect-1 ${visibleStates["div1"] ? "visible" : ""}`}>
                </div>
                <div className="cards-mantenedores">
                    {mantenedores.map((parceiro, index) => (
                        <CardParceiro key={index} {...parceiro} />
                    ))}
                </div>

                <span>NOSSOS</span> <h1 className="h1-titulo">ASSOCIADOS</h1>
                <div
                    ref={el => h1Refs.current[1] = el}
                    data-id="div2"
                    className={`background-effect-1 ${visibleStates["div2"] ? "visible" : ""}`}>
                </div>
                <div className="cards-associados">
                    {associados.map((parceiro, index) => (
                        <CardParceiro key={index} {...parceiro} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;
