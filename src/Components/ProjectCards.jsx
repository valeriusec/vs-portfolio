import React, { useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";

import { projects } from "../Constants/constants";

import Card from "./Cards";

const ProjectCards = () => {
  const [index, setIndex] = useState(0);

  const nextIndex = () => {
    setIndex(index === projects.length - 1 ? 0 : index + 1);
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full h-full flex justify-center items-center "
      >
        <m.div className="w-full h-full flex justify-center items-center relative">
          {projects.map((project, i) => (
            <AnimatePresence key={i}>
              {index === i && (
                <m.div
                  className="w-full h-full absolute flex justify-center items-center"
                >
                  <m.div className="absolute w-full h-full z-10 cursor-grab">
                    <Card
                      frontCard={false}
                      key={index + 1}
                      background={project.image}
                    />
                  </m.div>
                  <m.div className="absolute w-full h-full z-20 cursor-grab">
                    <Card
                      key={`${i}-front`}
                      frontCard={true}
                      index={index}
                      setIndex={nextIndex}
                      drag="y"
                      background={project.image}
                      title={project.name}
                      github={project.source_code_link}
                    />
                  </m.div>
                </m.div>
              )}
            </AnimatePresence>
          ))}
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default ProjectCards;
