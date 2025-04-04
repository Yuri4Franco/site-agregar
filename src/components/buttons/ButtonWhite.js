import "./ButtonWhite.css"

function ButtonWhite({ ButtonText }) {
    return (
        <div className="button-container"><button className="button-white">{ButtonText}</button></div>
    );
}

export default ButtonWhite;