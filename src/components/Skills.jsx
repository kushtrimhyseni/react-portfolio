import React from "react";
import SkillsProgresBar from "./SkillsProgresBar";

const Skills = () => {
  return (
    <div className="hero bg-[#f5f8fd] max-w-[1140px] mx-auto shadow-md rounded-lg">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse">
        <div className="mockup-phone border-primary">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <SkillsProgresBar />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <div className="flex flex-col w-full p-6">
            <strong className="text-3xl font-bold pb-5 relative text-blue-900 font-raleway">
              Skills
            </strong>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
