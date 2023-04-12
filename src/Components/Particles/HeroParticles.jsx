import ParticlesComponent from "./ParticlesComponent";

import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {

  return (
    <div className="w-full h-screen">
      <ParticlesComponent
        id='hero-particles'
        className="w-full h-screen z-0"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
