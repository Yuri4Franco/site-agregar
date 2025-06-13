import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.css"; // Criamos um CSS separado para manter a organização

const NavMenu = ({ isFooter, menuOpen }) => {
    const location = useLocation();

    // Definição dos itens do menu
    const menuItems = [
        { path: "/", label: "INÍCIO" },
        { path: "/#quem-somos", label: "SOBRE NÓS" },
        { path: "/#oque-fazemos", label: "O QUE FAZEMOS" },
        { path: "/#vitrine-agregar", label: "PARCEIROS" },
        { path: "https://wa.me/555596821340?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Agregar", label: "FAÇA PARTE" },
    ];

    return (
        <nav
            className={`${isFooter ? "nav-menu-footer" : "nav-menu"} ${menuOpen ? "open" : ""
                }`}
        >
            {isFooter && <h4>MENU</h4>}
            {menuItems.map((item) => (
                <Link
                    key={item.path}
                    to={item.path}
                    className={`item-menu ${location.pathname === item.path ? "active" : ""
                        }`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};

export default NavMenu;
