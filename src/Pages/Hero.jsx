import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HeroText />
        <HeroParticles />
      </m.div>
    </LazyMotion>
    </div>
  );
};

export default Hero;
