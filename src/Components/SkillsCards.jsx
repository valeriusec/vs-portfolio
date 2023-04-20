import React from "react";
import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex">
      {skills.map((skill, index) => (
        <div
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-400 rounded-xl border-4 border-primary-600 cursor-pointer scale-[0.8] hover:scale-[0.9]"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
            <img
              className="h-[50px] flex justify-center items-center w-[50px]  bg-primary-600 rounded-[50%] p-1 object-contain"
              src={skill.icon}
              alt={skill.title}
            />
            <span
              className="text-xl"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-600 text-grayscale-50 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              {skill.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;