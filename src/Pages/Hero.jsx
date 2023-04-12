import React from "react";
import { motion } from "framer-motion";

import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";

const Hero = () => {
  return (
    <>
      <motion.div 
      className="relative w-full flex justify-center items-center ">
        <HeroText />
        <HeroParticles />
      </motion.div>
    </>
  );
};

export default Hero;
