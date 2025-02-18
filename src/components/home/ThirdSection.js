import "./ThirdSection.css"
import CardParceiro from "../cards/CardParceiro";
import mantenedores from "../config/mantenedores";
import Associados from "../config/Associados";

function ThirdSection(){
    return(
        <div className="third-section-container">
            <h1 className="h1-titulo"><span id="span-nossos">NOSSOS</span> MANTENEDORES</h1>
            <div className="cards-mantenedores">
                {mantenedores.map((parceiro, index) => (
                    <CardParceiro key={index} {...parceiro} />
                ))}
            </div>
            <h1 className="h1-titulo"><span id="span-nossos">NOSSOS</span> ASSOCIADOS</h1>
            <div className="cards-mantenedores">
                {Associados.map((parceiro, index) => (
                    <CardParceiro key={index} {...parceiro} />
                ))}
            </div>
        </div>
    );
}

export default ThirdSection;