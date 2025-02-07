import React, { useState } from "react";
import "./HeaderLayout.css";
import Logo from "../assets/logo/logo-white-font.svg";


function HeaderLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerAzul, setHeaderAzul] = useState(false)

    //Para mobile
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header className="header">
            <div className="logo-agregar-container">
                <img className="logo-agregar-header" src={Logo} alt="Instituto Agregar" />
            </div>
            <div className={`toggle-menu ${menuOpen ? "open" : ""}`}>
                <input type="checkbox" id="checkbox" onClick={toggleMenu}></input>
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="first"></div>
                    <div className="bars" id="second"></div>
                    <div className="bars" id="third"></div>
                </label>
            </div>
            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <a className="item-menu" href="/">INICIO</a>
                <a className="item-menu" href="/blog">BLOG</a>
                <a className="item-menu" href="/blog">AGENDA</a>
                <a className="item-menu" href="/sobre">SOBRE NÓS</a>
                <a className="item-menu" href="/mantenedores">PARCEIROS</a>
                <a className="item-menu" href="/contato">CONTATO</a>    
                <a className="item-menu" href="/contato">FAÇA PARTE</a>
            </nav>
        </header>
    );
}

export default HeaderLayout;
