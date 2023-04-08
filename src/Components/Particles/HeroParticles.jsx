import { useCallback, useState, useRef, useEffect } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);

  return (
    <div className="w-full h-screen">
      <Particles
        className="w-full h-screen z-0"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
