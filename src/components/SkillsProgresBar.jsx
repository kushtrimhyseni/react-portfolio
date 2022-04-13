import React from "react";
import { skills, skillsright } from "./Data";
const SkillsProgresBar = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full justify-between gap-2 lg:gap-10 mt-6"
      id="skills"
    >
      <div className="w-full">
        {skills.map((skill) => {
          return (
            <div className="flex flex-col pb-2" key={skill.id}>
              <div className="flex justify-between items-center">
                <span className="uppercase block font-semibold text-black">
                  {skill.lang}
                </span>
                <span className="uppercase block font-semibold text-black">
                  {skill.skill}%
                </span>
              </div>
              <div>{skill.progress}</div>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        {skillsright.map((skill) => {
          return (
            <div className="flex flex-col pb-2" key={skill.id}>
              <div className="flex justify-between items-center">
                <span className="uppercase block font-semibold text-black">
                  {skill.lang}
                </span>
                <span className="uppercase block font-semibold text-black">
                  {skill.skill}%
                </span>
              </div>
              <div>{skill.progress}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsProgresBar;
