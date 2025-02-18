//Seção "O que fazemos" 
import { useEffect, useState, useRef } from "react";
import "./FirstSection.css"
import "../../App.css"
function FirstSection() {

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
            <div className="first-section-container">
                <div className="first-section-container-text-h1">
                    <h1 ref={h1Ref} className={`first-section-h1 ${isVisible ? "visible" : ""}`}>O que fazemos?</h1>
                    <p id="p-margin" className="p-texto"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed urna velit. Nunc viverra quam quis orci rhoncus congue. Praesent eget nunc tincidunt lacus pulvinar convallis vel eu eros. Integer feugiat, nunc pretium semper porta, velit mi luctus sem, eget ultricies enim nisi vel velit.</p>
                </div>

                <div className="first-section-container-text-h2">
                    <h2 className="h2-subtitutlo"> Conexão</h2>
                    <p id="p-margin" className="p-texto"> O Instituto Agregar tem e busca muitas conexões e usamos essas conexões para conectar soluções para as necessidades de nossos parceiros</p>
                </div>

                <div className="first-section-container-text-h2">
                    <h2 className="h2-subtitutlo"> Transformação </h2>
                    <p id="p-margin" className="p-texto"> Como um hub de inovação, o Instituto Agregar busca fortalecer a cultura da inovação através de workshops, eventos, talks e muito mais.</p>
                </div>

                <div className="first-section-container-text-h2">
                    <h2 className="h2-subtitutlo"> Inovação </h2>
                    <p id="p-margin" className="p-texto"> Nosso comprometimento vai muito além do fomento a cultura, nós buscamos transformar a região noroeste com diversas atividades para atender as necessidades da região e fomentar o desenvolvimento.</p>
                </div>
            </div>
        </>
    );
}

export default FirstSection;