import React from "react";
import { navItems } from "../Data";
const NavLinks = () => {
  return (
    <div>
      <ul className="flex flex-col justify-start">
        {navItems.map((item) => {
          return (
            <div
              key={item.id}
              className="flex justify-start items-center pt-3 pb-3"
            >
              {item.icon}
              <a href={`#${item.name.trim().toLowerCase()}`}>
                <li className="ml-2 text-[#a8a9b5] hover:text-white-900 font-opensans text-md font-normal cursor-pointer">
                  {item.name}
                </li>
              </a>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
