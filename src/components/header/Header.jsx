import React from "react";
import Socials from "./Socials";
import NavMenu from "./NavMenu";
import classNames from "classnames";
const Header = ({ menuOpen }) => {
  return (
    <div
      className={classNames(
        "fixed w-[300px] top-0 lg:left-0 items-center bottom-0 bg-[#040b14] h-screen flex flex-col p-6 overflow-y-auto z-20",
        { "left-[-300px]": !menuOpen }
      )}
    >
      <img
        src="https://i.ibb.co/2dGQVGW/profile-img.webp"
        alt="ProfilePic"
        className="w-[120px] h-[120px] rounded-full border-8 border-[#2c2f3f]"
      />
      <h1 className="text-white-900 flex justify-center items-center font-bold text-2xl mt-2">
        Kushtrim Hyseni - Rreli
      </h1>
      <Socials />
      <NavMenu />;
    </div>
  );
};

export default Header;
