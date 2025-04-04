import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("Mudança de rota detectada:", pathname);

        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0; // Para navegadores modernos
            document.body.scrollTop = 0; // Para navegadores antigos
        }, 50); // Pequeno delay para garantir a execução
    }, [pathname]);

    return null;
};

export default ScrollToTop;
