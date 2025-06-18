import React, { useState } from "react";
import "./HeaderLayout.css";
import Logo from "../assets/logos/logo-white-font.svg";
import NavMenu from "./NavMenu";

function HeaderLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="logo-agregar-container">
                <a href="/" alt><img className="logo-agregar-header" src={Logo} alt="Instituto Agregar" /></a>
            </div>
            <div className="toggle-menu">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={menuOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="checkbox" className="toggle">
                    <div className="bars" id="first"></div>
                    <div className="bars" id="second"></div>
                    <div className="bars" id="third"></div>
                </label>
            </div>
            <NavMenu menuOpen={menuOpen} />
        </header>
    );
}

export default HeaderLayout;
