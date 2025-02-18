import Logo from "../assets/logo/logo-agregar-marca1.png";
import "./FooterLayout.css";
import { TbPhoneFilled, TbMailFilled, TbLocationFilled, TbBrandLinkedinFilled, TbBrandInstagramFilled, TbBrandYoutubeFilled } from "react-icons/tb";

function FooterLayout() {
    return (
        <footer className="footer">
            <div className="logo-informacoes">
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
                <nav className="nav-menu-footer">
                    <a className="item-menu" href="/">INICIO</a>
                    <a className="item-menu" href="/blog">BLOG</a>
                    <a className="item-menu" href="/blog">AGENDA</a>
                    <a className="item-menu" href="/sobre">SOBRE NÓS</a>
                    <a className="item-menu" href="/mantenedores">PARCEIROS</a>
                    <a className="item-menu" href="/contato">CONTATO</a>
                    <a className="item-menu" href="/contato">FAÇA PARTE</a>
                </nav>
            </div>

            <div className="footer-social">
                <h3>Siga-nos em nossas redes sociais:</h3>

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
        </footer>
    );
}

export default FooterLayout;
