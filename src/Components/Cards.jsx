import React, { useState } from "react";

import {
  useMotionValue,
  useTransform,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

const Card = (props) => {
  const [exitY, setExitY] = useState(0);

  const y = useMotionValue(0);
  const scale = useTransform(y, [10, 0, 100], [0.5, 1, 0.5]);
  const rotate = useTransform(y, [200, 0, -400], [-45, 0, 45], {
    clamp: false,
  });

  const variantsFrontCard = {
    animate: { scale: 0.9, y: -50, opacity: 1 },
    exit: (custom) => ({ y: custom, opacity: 0, scale: 0.5 }),
  };

  const variantsBackCard = {
    initial: {
      scale: 0,
      y: 105,
      opacity: 0,
    },
    animate: {
      scale: 0.75,
      y: 30,
      opacity: 0.5,
    },
  };

  function handleDragEnd(_, info) {
    if (info.offset.y < -100) {
      setExitY(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.y > 100) {
      setExitY(250);
      props.setIndex(props.index - 1);
    }
  }

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          y,
          position: "absolute",
          rotate,
        }}
        whileTap={{ cursor: "grabbing" }}
        drag={props.drag}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        onDragEnd={handleDragEnd}
        variants={props.frontCard ? variantsFrontCard : variantsBackCard}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={exitY}
        transition={
          props.frontCard
            ? { type: "spring", stiffness: 300, damping: 30 }
            : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
        }
      >
        <m.div
          className="absolute w-[90%] h-[100%] rounded-[30px] drop-shadow-div overflow-hidden"
          style={{
            scale,
          }}
        >
          <m.div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${props.background})`,
            }}
            className="h-[70%] w-[100%] rounded-t-[30px]"
          />
          <m.div
            className="pt-10 pb-10 rounded-b-[30px] w-full h-fit absolute bg-primary-400 flex flex-col sm:flex-row items-center justify-between pr-10 pl-10"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
          
            <m.div className="flex flex-col">
              <m.p className="text-2xl text-primary-50 font-bold uppercase tracking-wide">
                {props.title}
              </m.p>
              {/* <m.a href={`${props.github}`}>{props.github}</m.a> */}
            </m.div>
            <m.button className="bg-primary-600 pt-2 pb-2 pl-4 pr-4 rounded-2xl text-primary-200">
              Show more
            </m.button>
          </m.div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
};

export default Card;

