import React from "react";
import SkillsProgresBar from "./SkillsProgresBar";

const Skills = () => {
  return (
    <div className="flex flex-col w-full mx-auto max-w-[1140px] p-6 bg-[#f5f8fd]">
      <strong className="text-3xl font-bold pb-5 relative text-blue-900 font-raleway">
        Skills
      </strong>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <SkillsProgresBar />
    </div>
  );
};

export default Skills;
