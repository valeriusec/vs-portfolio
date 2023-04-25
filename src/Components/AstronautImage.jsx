import { useRef, useState } from "react";
import {
  m,
  useScroll,
  useMotionValueEvent,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import { astroPath } from "../Constants/astroPath";
import BgQuote from "./elements/BgQuote";

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
      <div className="w-full h-full astro-path">
        <BgQuote text="this is not me" />
        <svg
          className="w-[90%] h-[90%] rotate-[-45deg]"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="860"
          height="1750"
          viewBox="0, 0, 860,1750"
          version="1.1"
        >
          <LazyMotion features={domAnimation} strict>
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
          </LazyMotion>
        </svg>
      </div>
    </div>
  );
};

export default AstronautImage;
