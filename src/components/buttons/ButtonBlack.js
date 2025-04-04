import "./ButtonBlack.css"

function ButtonBlack({ ButtonText }) {
    return (
        <div className="button-container"><button className="button-black">{ButtonText}</button></div>
    );
}

export default ButtonBlack;