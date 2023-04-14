import React, { useState, useEffect } from "react";
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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = projects.map((project) => {
      const image = new Image();
      image.src = project.image;
      return new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });
    });
    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error(error));
  }, []);

  if (!imagesLoaded) {
    return <div>Loading...</div>
  }

  const nextIndex = () => {
    setIndex(index === projects.length - 1 ? 0 : index + 1);
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        className="w-full h-full flex justify-center items-center"
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
                    />
                  </div>
                  <div className="absolute w-full h-full z-10 cursor-grab">
                    <Card
                      frontCard={false}
                      index={index}
                      background={project.image}
                      setIndex={nextIndex}
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
