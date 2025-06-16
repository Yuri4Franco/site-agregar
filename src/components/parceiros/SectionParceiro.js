import { useEffect, useState, useRef } from "react";
import { TbBrandLinkedinFilled, TbBrandInstagramFilled, TbWorldWww } from "react-icons/tb";
import { useParams } from "react-router-dom";
import parceiros from "../config/parceiros";
import FooterLayout from "../../layout/FooterLayout";
import HeaderLayout from "../../layout/HeaderLayout";
import "./SectionParceiro.css";
import CarrosselProdutos from "./CarrosselProdutos";
import ButtonHome from "../buttons/ButtonHome";

function SectionParceiros() {
    const h1Refs = useRef([]);
    const [visibleStates, setVisibleStates] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleStates(prevState => ({
                            ...prevState,
                            [entry.target.dataset.id]: true
                        }));
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 1.0 }
        );

        h1Refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const { nomeParceiro } = useParams();
    console.log(nomeParceiro);
    console.log(parceiros);

    const parceiro = parceiros.find(p => p.nome === decodeURIComponent(nomeParceiro));
    

    if (!parceiro) {
        return <h1>Parceiro não encontrado!</h1>;
    }
    return (
        <>
            <HeaderLayout></HeaderLayout>
            <section className="section-parceiros" >
                <div className="section-parceiros-container">
                    <div className="titulo-logo-parceiros">
                        <div>
                            <h1>{parceiro.nome}</h1>
                            <h2>{parceiro.slogan}</h2>
                            <h3>{parceiro.tipo}</h3>
                            <div className="parceiros-social">
                                <div className="social-icons">
                                    <a href={parceiro.instagram} target="_blank" rel="noreferrer" className="social-buttons">
                                        <div className="icon">
                                            <TbBrandInstagramFilled />
                                        </div>
                                        <span>Instagram</span>
                                    </a>
                                    <a href={parceiro.linkedin} target="_blank" rel="noreferrer" className="social-buttons">
                                        <div className="icon">
                                            <TbBrandLinkedinFilled />
                                        </div>
                                        <span>LinkedIn</span>
                                    </a>
                                    <a href={parceiro.website} target="_blank" rel="noreferrer" className="social-buttons">
                                        <div className="icon">
                                            <TbWorldWww />
                                        </div>
                                        <span>Website</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="logo-container">
                            <img src={parceiro.logo} alt={parceiro.nome} className="logo-empresa" />
                        </div>
                    </div>

                    <div className={`sobre-parceiros ${parceiro.sede.length === 0 ? "sem-sede" : ""}`}>
                        <div>
                            <h1
                                ref={el => h1Refs.current[0] = el}
                                data-id="sobre"
                                className={`h1-background ${visibleStates["sobre"] ? "visible" : ""}`}
                            >
                                SOBRE
                            </h1>
                            {parceiro.sobre.map((paragrafo, index) => (
                                <p key={index}>{paragrafo}</p>
                            ))}

                            <div className="items-texto">
                                {parceiro.items.map((item, index) => (
                                    <div key={index} className="item-box">
                                        {/* Item principal */}
                                        <p>
                                            <strong>{item.titulo}: </strong>
                                            {item.texto}
                                        </p>

                                        {/* Sub-itens (se existirem) */}
                                        {item.subitens?.length > 0 && (
                                            <ul className="subitem-list">
                                                {item.subitens.map((sub, subIndex) => (
                                                    <li key={subIndex}>
                                                        <strong>{sub.nome}: </strong>
                                                        {sub.descricao}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {parceiro.sede.length > 0 && (
                            <div className="sede-imagens">
                                {parceiro.sede.map((imagem, index) => (
                                    <img key={index} src={imagem.imagem} alt={imagem.alt} className="imagem-sede" />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="segmentos-parceiros">
                        <h1
                            ref={el => h1Refs.current[1] = el}
                            data-id="segmentos"
                            className={`h1-background ${visibleStates["segmentos"] ? "visible" : ""}`}
                        >
                            SEGMENTOS
                        </h1>
                        <ul>
                            {parceiro.segmentos.map((segmento, index) => (
                                <li key={index}>
                                    <strong>{segmento.titulo}</strong> {segmento.texto}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="produtos-parceiros">
                        <h1
                            ref={el => h1Refs.current[2] = el}
                            data-id="galeria"
                            className={`h1-background ${visibleStates["galeria"] ? "visible" : ""}`}
                        >
                            PRODUTOS/SERVIÇOS
                        </h1>
                        <div className="descricao-produtos">
                            {parceiro.produtosDescricao.map((paragrafo, index) => (
                                <li key={index}>
                                    <strong>{paragrafo.titulo}</strong> {paragrafo.descricao}

                                    {paragrafo.beneficios && (
                                        <ul>
                                            {paragrafo.beneficios.map((beneficio, i) => (
                                                <li key={i}>•{beneficio}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </div>
                        <CarrosselProdutos produtos={parceiro.produtos} />

                        <p id="info-adicional">Para mais informações de produtos e serviços acesse: <a href={parceiro.website} target="_blank" rel="noreferrer">{parceiro.website}</a></p>
                    </div>

                    <div className="contato-parceiros">
                        <h1
                            ref={el => h1Refs.current[3] = el}
                            data-id="contato"
                            className={`h1-background ${visibleStates["contato"] ? "visible" : ""}`}
                        >
                            CONTATO
                        </h1>
                        <p><strong>Telefone:</strong> {parceiro.telefone}</p>
                        <p><strong>Endereço:</strong> {parceiro.endereco}</p>
                        <p><strong>Email:</strong> {parceiro.email}</p>
                    </div>
                    <div className="cta">
                        <div className="cta-container">
                            <h1>Junte-se a nós!</h1>
                            <p id="cta-desktop">Faça parte da revolução que a inovação está trazendo para o interior do Rio Grande do Sul. Com grandes empresas e cidades com os melhores IDHs do Brasil, o interior é o novo cenário perfeito para inovar e crescer.</p>
                            <p id="cta-smartphones">Faça parte desta revolução!</p>
                            <ButtonHome text="FAÇA PARTE" link="https://wa.me/555596821340?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Agregar" />
                        </div>
                    </div>
                </div>
            </section>
            <FooterLayout></FooterLayout>
        </>
    );
}

export default SectionParceiros;
