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
        <div className="third-section-container">
            <h1 className="h1-titulo"><span id="span-nossos">NOSSOS</span> MANTENEDORES</h1>
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

            <h1 className="h1-titulo"><span id="span-nossos">NOSSOS</span> ASSOCIADOS</h1>
            <div
                ref={el => h1Refs.current[1] = el}
                data-id="div2"
                className={`background-effect-1 ${visibleStates["div2"] ? "visible" : ""}`}>
            </div>
            <div className="cards-mantenedores">
                {associados.map((parceiro, index) => (
                    <CardParceiro key={index} {...parceiro} />
                ))}
            </div>
        </div>
    );
}

export default ThirdSection;
