import React, { useEffect, useRef, useState } from "react";
import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
      <div className="w-full">
        <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
      </div>
      <div>
        <MarqueeCards direction="left">
          <SkillsCards />
        </MarqueeCards>
      </div>
      <div>
        <MarqueeCards direction="right">
          <SkillsCards />
        </MarqueeCards>
      </div>
    </div>
  );
};

export default Skills;
