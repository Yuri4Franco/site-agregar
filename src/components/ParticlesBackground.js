import Particles from "react-tsparticles";
import { useCallback } from "react";
import ParticlesConfig from "./config/ParticlesConfig"
import { loadFull } from "tsparticles";


const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    return (
        <Particles init={particlesInit} options={ParticlesConfig}></Particles>
    );
}

export default ParticlesBackground;