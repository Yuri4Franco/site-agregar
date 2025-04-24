import FooterLayout from "../layout/FooterLayout";
import HeaderLayout from "../layout/HeaderLayout";
import "./ConstrucaoPagina.css"

function ConstrucaoPagina() {


    return (
        <>
            <HeaderLayout></HeaderLayout>
            <div className="construcao-pagina">
                <img src={require("../assets/build.png")} alt="Construcao Pagina" />
                <h1>O site do Instituto Agregar ainda está em produção! Essa página estará disponível em breve 👀</h1>
            </div>

            <FooterLayout></FooterLayout>
        </>
    )
}

export default ConstrucaoPagina;