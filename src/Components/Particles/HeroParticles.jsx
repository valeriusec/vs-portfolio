import ParticlesComponent from "./ParticlesComponent";
import { heroOptions } from "./particlesOptions";

const HeroParticles = () => {
  return (
    <div className="w-full h-screen min-h-[800px]">
      <ParticlesComponent
        id="hero-particles"
        className="w-full h-screen z-0 min-h-[800px]"
        particlesOptions={heroOptions}
      />
    </div>
  );
};

export default HeroParticles;
