import { Link } from "react-router-dom";
import "./CardParceiro.css";

function CardParceiro({ nome, LogoNormal, LogoWhite }) {
    return (
        <Link to={`/parceiros/${encodeURIComponent(nome)}`} className="card-parceiro-link">
            <div className="card-parceiro-container">
                <h1 className="card-parceiro-title">{nome}</h1>
                <div className="card-logo">
                    <img className="card-parceiro-logo-normal" src={LogoNormal} alt={nome} />
                    <img className="card-parceiro-logo-white" src={LogoWhite} alt={nome} />
                </div>
            </div>
        </Link>
    );
}

export default CardParceiro;
