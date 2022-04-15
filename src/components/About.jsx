import React from "react";
import PersonalInformation from "./PersonalInformation";
import { about } from "./Data";
const About = () => {
  return (
    <div
      className="flex flex-col pb-8 lg:pb-16 pt-4 lg:pt-16 justify-center max-w-[1140px] overflow-hidden mx-auto z-10"
      id="about"
    >
      <h1 className="text-3xl font-bold pb-5 relative text-blue-900 font-raleway p-6 md:p-0 md:pb-3">
        About
      </h1>
      <p className="text-[#272829] font-raleway font-opensans text-base p-6 md:p-0">
        {about[0].aboutme}
      </p>
      <div className="flex flex-col lg:flex-row mt-0 lg:mt-6 p-6 md:p-0">
        <img
          src="https://i.ibb.co/2dGQVGW/profile-img.webp"
          alt="Profile"
          className="w-full lg:max-w-[350px] max-h-[350px] object-cover"
        />
        <div className="flex flex-col pt-6 lg:pt-0 lg:pl-6">
          <h3 className="font-bold text-2xl text-blue-900 font-raleway">
            {about[0].jobtitle}
          </h3>
          <p className="text-[#272829] font-raleway font-opensans text-base">
            {about[0].shortdesc}
          </p>
          <PersonalInformation />
        </div>
      </div>
    </div>
  );
};

export default About;
