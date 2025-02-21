import SectionParceiros from "../components/parceiros/SectionParceiros";
import mantenedores from "../components/config/mantenedores";
import "./Parceiros.css"
function Parceiros() {
    return (
        <>
            <h1>Parceiros</h1>
            <div className="parceiros-container">
            {mantenedores.map((parceiro, index) => (
                <SectionParceiros key={index} {...parceiro} ></SectionParceiros>
            ))}
            </div>
        </>
    );
}

export default Parceiros    