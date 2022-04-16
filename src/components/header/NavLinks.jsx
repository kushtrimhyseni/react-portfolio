import React from "react";
import { navItems } from "../Data";
import { NavLink } from "react-router-dom";
import { FaRegEnvelope } from "react-icons/fa";
const NavLinks = () => {
  return (
    <div>
      <ul className="flex flex-col justify-start">
        {navItems.map((item) => {
          return (
            <div key={item.id} className="flex justify-start items-center p-3">
              {item.icon}
              <a href={`#${item.name.trim().toLowerCase()}`}>
                <li className="ml-2 text-[#a8a9b5] hover:text-white-900 font-opensans text-md font-normal cursor-pointer list-none">
                  {item.name}
                </li>
              </a>
            </div>
          );
        })}
      </ul>
      <div className="flex mt-2 items-center p-3">
        <FaRegEnvelope color="white" size={20} className="cursor-pointer" />
        <NavLink
          className="ml-2 text-[#a8a9b5] hover:text-white-900 font-opensans text-md font-normal cursor-pointer"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
