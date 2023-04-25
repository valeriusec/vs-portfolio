import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen overflow-hidden bg-grayscale-950 flex items-center justify-center relative">
      <span
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="absolute text-primary-400 text-xl"
      >
        VS
      </span>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
