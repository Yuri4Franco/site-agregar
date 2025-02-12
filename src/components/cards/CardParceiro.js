// Card que aparece nas tabelas Mantenedores e Associados.
import "./CardParceiro.css"


function CardParceiro(parceiros) {
    return (
        <div className="card-parceiro-container">
            <h1 className="card-parceiro-title">{parceiros.nome}</h1>
            <div className="card-logo">
                <img className="card-parceiro-logo-normal" src={parceiros.LogoNormal} alt=""></img>
                <img className="card-parceiro-logo-white" src={parceiros.LogoWhite} alt=""></img>
            </div>
        </div>


    );
}

export default CardParceiro;