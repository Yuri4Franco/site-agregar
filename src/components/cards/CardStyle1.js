
function CardStyle1({logo, descricao, alt}){
    return(
        <div className="card-style-1">
            <img id="card-style-1-logo" src={logo} alt={alt}></img>
            <p id="card-style-1-descricao">{descricao}</p>
        </div>
    );
}

export default CardStyle1;