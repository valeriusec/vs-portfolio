import React, { useRef, useState } from "react";

import {
  m,
  useScroll,
  useMotionValueEvent,
  LazyMotion,
  domAnimation,
} from "framer-motion";

import { astroPath } from "../Constants/astroPath";
import Arrow from "./elements/Arrow";

const AstronautImage = () => {
  const [isInView, setIsInView] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.1) {
      setIsInView(true);
    }
  });

  return (
    <div ref={ref} className="w-full h-full relative">
      <LazyMotion features={domAnimation} strict>
        <m.div className="w-full h-full astro-path">
          <m.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, type: "spring"}}
          className="absolute top-[10%] sm:top-[10%] md:top-[10%] left-[-60%] sm:left-[-30%] md:left-[-15%] lg:left-[-5%] xl:left-[10%] w-fit h-fit flex flex-col rotate-[-30deg]">
            <m.p
              style={{ fontFamily: "La Belle Aurore, cursive" }}
              className="text-grayscale-600 text-lg noselect"
            >
              this is not me
            </m.p>
            <m.div className="w-32 h-32 rotate-[90deg]">
              <Arrow />
            </m.div>
          </m.div>
          <m.svg
            className="w-[90%] h-[90%] rotate-[-45deg]"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="860"
            height="1750"
            viewBox="0, 0, 860,1750"
            version="1.1"
          >
            <m.path
              initial={{ pathLength: 0, x: 300 }}
              animate={{ pathLength: isInView ? 0.5 : 0, x: 0 }}
              transition={{ duration: 4, type: "spring" }}
              fill="none"
              stroke="#29c27f"
              strokeWidth={0.5}
              stroke-linecap="square"
              stroke-linejoin="miter"
              stroke-miterlimit="0.1"
              d={astroPath}
            ></m.path>
          </m.svg>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default AstronautImage;
