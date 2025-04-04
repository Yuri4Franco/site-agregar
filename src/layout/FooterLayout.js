import Logo from "../assets/logo/logo-agregar-marca1.png";
import "./FooterLayout.css";
import { TbPhoneFilled, TbMailFilled, TbLocationFilled, TbBrandLinkedinFilled, TbBrandInstagramFilled, TbBrandYoutubeFilled } from "react-icons/tb";
import NavMenu from "./NavMenu"; // Importando o menu reutilizável

function FooterLayout() {
    return (
        <footer className="footer">
            <div className="footer-hero">
                <div className="logo-agregar-footer">
                    <img src={Logo} id="logo-agregar-footer" alt="Instituto Agregar" />
                </div>
                <div className="frase-footer">
                    <h3> O hub de inovação</h3><h3>do noroeste do Rio Grande do Sul.</h3>
                </div>
                <div className="footer-social">
                    <div className="social-icons">
                        <a href="https://www.instagram.com/agregarinstituto" target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbBrandInstagramFilled />
                            </div>
                            <span>Instagram</span>
                        </a>

                        <a href="https://www.linkedin.com/company/instituto-agregar/" target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbBrandLinkedinFilled />
                            </div>
                            <span>LinkedIn</span>
                        </a>

                        <a href="https://www.youtube.com/@institutoagregar" target="_blank" rel="noreferrer" className="social-buttons">
                            <div className="icon">
                                <TbBrandYoutubeFilled />
                            </div>
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-menu">
                <NavMenu isFooter={true} /> {/* Menu reutilizável com prop específica para o footer */}
            </div>

            <div className="footer-informacoes">
                <div className="item-footer">
                    <h4>ENDEREÇO:</h4>
                    <p className="p-footer">
                        <TbLocationFilled /> R. Konrad Adenauer, 555 - Sala B - Centro, Panambi - RS
                    </p>
                </div>
                <div className="item-footer">
                    <h4>CONTATO:</h4>
                    <p className="p-footer">
                        <TbMailFilled /> Email: institutoagregarrs@gmail.com
                    </p>
                    <p className="p-footer">
                        <TbPhoneFilled /> Telefone: (55) 9 9682-1340
                    </p>
                </div>
            </div>
            <div className="footer-copyright">
                <p> ©Instituto Agregar | Webdesigner: Arthur Fogaça Martins | Desenvolvedor web: Yuri Antunes Franco</p>
            </div>
        </footer>
    );
}

export default FooterLayout;
