import { Link } from "react-router-dom";
import "./CardParceiro.css";

function CardParceiro({ nome, LogoNormal, LogoWhite, sobre, website }) {
    const temMaterial = sobre && sobre.length > 0;

    const cardContent = (
        <div className="card-parceiro-container">
            <div className="card-logo">
                <img className="card-parceiro-logo-normal" src={LogoNormal} alt={nome} />
                <img className="card-parceiro-logo-white" src={LogoWhite} alt={nome} />
            </div>
        </div>
    );

    return temMaterial ? (
        <Link to={`/parceiros/${encodeURIComponent(nome)}`} className="card-parceiro-link">
            {cardContent}
        </Link>
    ) : (
        <a href={website} target="_blank" rel="noopener noreferrer" className="card-parceiro-link">
            {cardContent}
        </a>
    );
}

export default CardParceiro;
