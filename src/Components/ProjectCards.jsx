import React, { useState } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
} from "framer-motion";

import { projects } from "../Constants/constants";

import Card from "./Cards";

const ProjectCards = () => {
  const [index, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextIndex = () => {
    setIndex(index === projects.length - 1 ? 0 : index + 1);
    setImageLoaded(false);
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full h-full flex justify-center items-center "
      >
        <div className="w-full h-full flex justify-center items-center relative">
          {projects.map((project, i) => (
            <AnimatePresence key={i}>
              {index === i && (
                <div className="w-full h-full absolute flex justify-center items-center">
                  <div className="absolute w-full h-full z-20 cursor-grab">
                    <Card
                      key={`${i}-front`}
                      frontCard={true}
                      setIndex={nextIndex}
                      index={index}
                      drag="y"
                      background={project.image}
                      title={project.name}
                      github={project.source_code_link}
                      onLoad={handleImageLoaded}
                    />
                  </div>
                  <div className="absolute w-full h-full z-10 cursor-grab">
                    <Card
                      frontCard={false}
                      index={index}
                      background={project.image}
                      setIndex={nextIndex}
                      onLoad={handleImageLoaded}
                    />
                  </div>
                </div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </motion.div>
    </LazyMotion>
  );
};

export default ProjectCards;
