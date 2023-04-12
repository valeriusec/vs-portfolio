import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;
  return (
    <LazyMotion features={domAnimation} strict> 
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-primary-600 p-6 noselect"
      >
        <span
          className="opacity-50"
          style={{
            textTransform: "uppercase",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <h2
          className="tracking-wider text-6xl sm:text-8xl md:text-9xl"
          style={{ fontFamily: "Morganite Black"}}
        >
          {title}
        </h2>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
