import "./OqFazemos.css";
import { BsLink45Deg, BsLightbulb, BsInfoCircle } from "react-icons/bs";
import { BiLink, BiBulb } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import { FaRegLightbulb, FaLink } from "react-icons/fa";

import { motion } from "framer-motion";
import WaveDivider from "../divisor/WaveDivider";

function OqFazemos() {
    return (
        <section className="oque-fazemos-container">
            <div className="oque-fazemos-texto">
                <h2>
                    O QUE <span className="destaque">FAZEMOS?</span>
                </h2>
                <p>Transformamos inovação em impacto real no coração do Rio Grande do Sul atráves da conexão, inovação e sensibilização.</p>
            </div>

            <div className="oque-fazemos-cards">
                <div className="card">

                    <h3><span id="conexoes-icon"><FiLink /> </span>CONEXÃO</h3>
                    <p>O Instituto Agregar tem e busca muitas conexões e cultivamos inovação com propósito.</p>
                </div>

                <div className="card">
                    <h3><span><FaRegLightbulb /></span> INOVAÇÃO</h3>
                    <p>Como um hub de inovação, o Instituto Agregar busca fortalecer cultura da inovação através de workshops, eventos e links úteis.</p>
                </div>

                <div className="card">
                    <h3><span><BsInfoCircle /></span> SENSIBILIZAÇÃO</h3>
                    <p>Nosso comprometimento vai além: buscamos transformar a rede de parceiros com ações alinhadas ao desenvolvimento regional.</p>
                </div>
            </div>
        </section>
    );
}

export default OqFazemos;