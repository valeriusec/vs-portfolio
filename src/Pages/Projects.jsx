import React from "react";
import AstronautImage from "../Components/AstronautImage";
import SectionTitle from "../Components/SectionTitle";

import ProjectCards from "../Components/ProjectCards";

const Projects = () => {
  return (
    <div className="w-full h-screen relative mt-40 flex flex-col items-center justify-center pb-36">
      <div className="w-full h-[20%] mb-20">
        <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
      </div>
      <div className="w-full h-[80%] z-10 flex justify-center">
        <div className="w-full xl:w-[60%] h-full">
          <ProjectCards />
        </div>
        <div className="absolute w-full h-full top-[-25%] right-[-75%] sm:right-[-50%]">
          <AstronautImage />
        </div>
      </div>

    </div>
  );
};

export default Projects;