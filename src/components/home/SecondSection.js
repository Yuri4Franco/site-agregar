import ButtonBlue from "../buttons/ButtonBlue";
import "./SecondSection.css";


function SecondSection() {
    return (
        <div className="second-section-container">
            <h1 className="h1-titulo"> Sobre o <span> Instituto Agregar </span></h1>
            <p className="p-texto"> O Instituto Agregar é um hub de Inovação sem fins lucrativos que busca o desenvolvimento regional do 
                interior do Rio Grande do Sul. Acreditamos no potencial dos talentos locais e na inovação como caminho
                para o crescimento econômico e social. Por meio de capacitação e suporte a projetos inovadores, nosso 
                objetivo é conectar empresas, empreendedores e investidores para impulsionar a região como um todo. 
                Trabalhamos em parceria com grandes executivos, especialistas em negócios e
                instituições de ensino renomadas para oferecer soluções personalizadas e de alto impacto.
            </p>
            <ButtonBlue ButtonText="SAIBA MAIS"></ButtonBlue>
            

        </div>
    );
}

export default SecondSection;