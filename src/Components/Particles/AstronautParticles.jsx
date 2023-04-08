import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import "pathseg";


import { astronautOptions } from "./particlesOptions";


const AstronautParticles = () => {
  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine), await loadPolygonMaskPlugin(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await container;
  }, []);


  return (
    <div className="w-full h-full">
      <Particles
        className="w-full h-full z-1"
        id="astroparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={astronautOptions}
      />
    </div>
  );
};

export default AstronautParticles;
