import React from "react";

import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";

const Hero = () => {
  return (
    <>
      <div className="relative w-full flex justify-center items-center">
        <HeroText />
        <HeroParticles />
      </div>
    </>
  );
};

export default Hero;
