import "./OqFazemos.css";
import { BsInfoCircle } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";


function OqFazemos() {
    return (
        <section id="oque-fazemos" className="oque-fazemos-container">
            <div className="oque-fazemos-texto">
                <h2>
                    O QUE <span className="destaque">FAZEMOS?</span>
                </h2>
                <p>Transformamos inovação em impacto real no coração do Rio Grande do Sul atráves da conexão, inovação e sensibilização.</p>
            </div>

            <div className="oque-fazemos-cards">
                <div className="card">

                    <h3><span id="conexoes-icon"><FiLink /> </span>CONEXÃO</h3>
                    <p>Promovemos encontros entre empresas, universidades, poder público e comunidade para construir soluções conjuntas e fortalecer o ecossistema regional.</p>
                </div>

                <div className="card">
                    <h3><span><FaRegLightbulb /></span> INOVAÇÃO</h3>
                    <p>Fomentamos ideias que viram ação. Criamos um ambiente onde tecnologia, pesquisa e criatividade se transformam em soluções reais para o território.</p>
                </div>

                <div className="card">
                    <h3><span><BsInfoCircle /></span> SENSIBILIZAÇÃO</h3>
                    <p>Tornamos a inovação acessível. Por meio de eventos e ações educativas, aproximamos as pessoas dos desafios e oportunidades da nova economia.</p>
                </div>
            </div>
        </section>
    );
}

export default OqFazemos;