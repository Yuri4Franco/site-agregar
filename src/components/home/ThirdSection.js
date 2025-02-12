import "./ThirdSection.css"
import CardParceiro from "../cards/CardParceiro";
import mantenedores from "../config/mantenedores";

function ThirdSection(){
    return(
        <div className="third-section-container">
            <h1 className="h1-titulo">Nossos Mantenedores</h1>
            <div className="cards-mantenedores">
                {mantenedores.map((parceiro, index) => (
                    <CardParceiro key={index} {...parceiro} />
                ))}
            </div>
        </div>
    );
}

export default ThirdSection;