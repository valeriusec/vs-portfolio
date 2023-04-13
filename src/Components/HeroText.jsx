import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className="w-fit h-fit text-grayscale-50 absolute z-10 flex flex-col justify-center items-center rounded-[50%]"
        id="repulse-div"
      >
        <m.h1
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "Vermin Vibes, sans-serif" }}
        >
          Hi, I'm{" "}
          <m.span className="text-primary-400" style={{ fontSize: "1.2em" }}>
            Valeriu
          </m.span>
        </m.h1>
        <m.span
          className="cursor-pointer text-4xl sm:text-5xl underline underline-offset-4 decoration-primary-400"
          id="repulse-span"
          style={{ fontFamily: "Morganite Extra Bold, sans-serif" }}
        >
          <m.span className="text-primary-400">Front-end</m.span> Developer
        </m.span>
      </m.div>
    </LazyMotion>
  );
};

export default HeroText;
