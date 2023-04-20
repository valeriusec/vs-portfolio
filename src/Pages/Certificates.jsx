import React, { useEffect, useState } from "react";
import SectionTitle from "../Components/SectionTitle";

import { motion } from "framer-motion";

import { certificates } from "../Constants/constants";

const Certificates = () => {
  
  return (
    <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
      <div className="w-full">
        <SectionTitle
          title="CERTIFICATES"
          subtitle="Proof of Achievement and Expertise"
        />
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[80%] flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
          {certificates.image.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              className="w-full sm:w-[48%] rounded-xl p-1 bg-primary-400"
            >
              <img className="w-full rounded-xl" src={certificate} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
