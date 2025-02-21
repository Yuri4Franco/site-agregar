import { TbBrandLinkedinFilled, TbBrandInstagramFilled, TbWorldWww } from "react-icons/tb";
import "./SectionParceiros.css";
function SectionParceiros(parceiros) {
    return (
        <section id={parceiros.nome} className="section-parceiros-container">
            <div className="section-parceiros-coluna-1">

                <img src={parceiros.LogoNormal} alt="" />
                <div className="parceiros-social">
                    <div className="social-icons">
                        <a href={parceiros.instagram} target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbBrandInstagramFilled />
                            </div>
                            <span>Instagram</span>
                        </a>

                        <a href={parceiros.linkedin} target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbBrandLinkedinFilled />
                            </div>
                            <span>LinkedIn</span>
                        </a>

                        <a href={parceiros.website} target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbWorldWww />
                            </div>
                            <span>Website</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="section-parceiros-coluna-2">
                <h1 className="">{parceiros.nome}</h1>
                <h2>{parceiros.tipo}</h2>
                <p>{parceiros.descricao}</p>
            </div>
        </section>
    );
}

export default SectionParceiros;