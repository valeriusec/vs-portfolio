import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

import Arrow from "./Arrow";

const BgQuote = (props) => {
  
  const { text } = props;

    return (
    
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", delay: 1 }}
        className="absolute top-[10%] sm:top-[10%] md:top-[10%] left-[-60%] sm:left-[-30%] md:left-[-15%] lg:left-[-5%] xl:left-[10%] w-fit h-fit flex flex-col rotate-[-45deg]"
      >
        <m.p
          style={{ fontFamily: "La Belle Aurore, cursive" }}
          className="text-grayscale-600 text-lg noselect"
        >
          {text}
        </m.p>
        <m.div className="w-32 h-32 rotate-[90deg]">
          <Arrow />
        </m.div>
      </m.div>
  );
};

export default BgQuote;
