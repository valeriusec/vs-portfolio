import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";

const Hero = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HeroText />
        <HeroParticles />
      </m.div>
    </LazyMotion>
  );
};

export default Hero;
