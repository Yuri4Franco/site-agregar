import "./QuemSomos.css";
import ButtonHome from "../buttons/ButtonHome";
import { FaRocket, FaSeedling, FaUsers, FaChartLine, FaBookOpen, FaLightbulb, FaStar } from "react-icons/fa";


const QuemSomos = () => {
    return (
        <section id="quem-somos" className="quem-somos">
            <div className="conteudo">
                <h2>QUEM SOMOS</h2>
                <h1>
                    INSTITUTO AGREGAR
                </h1>
                <p>
                    O Instituto Agregar é um hub de inovação sem fins lucrativos, sediado em Panambi, que atua para impulsionar o desenvolvimento da região Noroeste do Rio Grande do Sul. Acreditamos no potencial das pessoas, das empresas e do território como agentes de transformação, conectando talentos, empreendedores e organizações por meio de programas de capacitação, experiências práticas e apoio a projetos inovadores.
                </p>
                <p>
                    Nosso propósito é construir pontes entre o presente e o futuro, promovendo soluções sustentáveis, tecnológicas e colaborativas. Para isso, trabalhamos lado a lado com empresas, especialistas e instituições de ensino, gerando impacto positivo e duradouro em toda a região.
                </p>
            </div>
            <div className="beneficios">
                <div className="beneficios-cta">
                    <h3>Por que fazer parte do Instituto?</h3>
                    <ul>
                        <li><FaRocket className="beneficios-icons" /> Impulsione novos negócios e conexões estratégicas</li>
                        <li><FaSeedling className="beneficios-icons" /> Capacitação com foco no futuro do agro e da indústria</li>
                        <li><FaUsers className="beneficios-icons" /> Networking com quem faz acontecer</li>
                        <li><FaChartLine className="beneficios-icons" /> Projetos com impacto local e regional</li>
                        <li><FaBookOpen className="beneficios-icons" /> Aprendizado contínuo, na prática</li>
                        <li><FaLightbulb className="beneficios-icons" /> Acesso a tecnologias e soluções inovadoras</li>
                        <li><FaStar className="beneficios-icons" /> Valorização da sua marca</li>
                        <div className="button-container">
                            <ButtonHome text="SAIBA MAIS" link="https://wa.me/555596821340?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Agregar" />
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default QuemSomos;
