import React, { useEffect, useState } from 'react';
import Logo from "../../assets/logo/logo-marca.svg";
import { motion, AnimatePresence } from 'framer-motion';
import "./HeroSection.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HeaderLayout from '../../layout/HeaderLayout';

function HeroSection() {
    const [palavras] = useTypewriter({
        words: ['INOVAÇÃO', 'TRANSFORMAÇÃO', 'CONEXÃO', 'COLABORAÇÃO', 'SENSIBILIZAÇÃO', 'TECNOLOGIA'],
        loop: {},
        typeSpeed: 50,
        deleteSpeed: 25

    });

    return (
        <>
            <div className="hero-section-container">
                <video className="video-background" loop muted playsInline autoPlay src={require("../../assets/videos/hero-video.mp4")}></video>
                <motion.img
                    src={Logo}
                    alt="Instituto Agregar"
                    id="hero-section-logo"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />

                <motion.div
                    className="hero-section-text"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 id="hero-section-h1">
                        O hub de inovação <br /> do noroeste do Rio Grande do Sul
                    </h1>
                    <p id='hero-section-p'>{palavras}</p>
                    <span id='cursor'><Cursor /></span>
                </motion.div>
            </div>
        </>

    );
}

export default HeroSection;