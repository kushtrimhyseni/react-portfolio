import React from "react";
import { personalInformation } from "./Data";
import { FaAngleRight } from "react-icons/fa";
const PersonalInformation = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mt-4">
      <div className="w-full">
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Birthday:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.birthday}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Website:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.website}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Phone:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.phone}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            City:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.city}
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Age:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.age}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Degree:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.degree}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            PhEmailone:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.email}
          </span>
        </div>
        <div className="flex items-center gap-2 pb-2">
          <FaAngleRight color="#149ddd" size={20} />
          <span className="text-[#272829] font-opensans text-medium font-bold">
            Freelance:
          </span>
          <span className="font-opensans text-base">
            {personalInformation.freelance}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
