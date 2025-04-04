import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.css"; // Criamos um CSS separado para manter a organização

const NavMenu = ({ isFooter, menuOpen }) => {
    const location = useLocation();

    // Definição dos itens do menu
    const menuItems = [
        { path: "/", label: "INÍCIO" },
        { path: "/sobre", label: "SOBRE NÓS" },
        { path: "/parceiros", label: "PARCEIROS" },
        { path: "/contato", label: "CONTATO" },
        { path: "/faca-parte", label: "FAÇA PARTE" },
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
