import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./CarrosselProdutos.css";

const CarrosselProdutos = ({ produtos }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1} // Padrão para mobile
            navigation
            pagination={{ clickable: true }}
            centeredSlides={false}
            breakpoints={{
                768: { slidesPerView: "auto" },
                1024: { slidesPerView: "auto" },
                1440: { slidesPerView: "auto" },
            }}
            className="galeria-produtos"
        >
            {produtos.map((produto, index) => (
                <SwiperSlide key={index} className="swiper-slide-produto">
                    <div className="produto-item">
                        <img src={produto.imagem} alt={produto.titulo} className="imagem-produto" />
                        <div className="produto-titulo">
                            <h1>{produto.titulo}</h1>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarrosselProdutos;
