import React from "react";
import { FaLockOpen, FaLock } from "react-icons/fa";

const Banner = ({ menuOpen, setOpen }) => {
  const toggleMenu = () => {
    setOpen(!menuOpen);
  };

  return (
    <div className="hero-bg">
      <button className="block lg:hidden z-20">
        {menuOpen ? (
          <FaLockOpen
            color="#ffffff"
            size={24}
            className="fixed right-[15px] top-[15px] z-20"
            onClick={toggleMenu}
          />
        ) : (
          <FaLock
            color="#ffffff"
            size={24}
            className="fixed right-[15px] top-[15px] z-20"
            onClick={toggleMenu}
          />
        )}
      </button>
      <h1 className="absolute z-10 text-4xl lg:text-6xl font-bold text-white-900 left-[40px] lg:left-1/3 top-1/3 font-raleway">
        Kushtrim Hyseni
      </h1>
      <span className="absolute z-10 text-2xl font-medium text-white-900 left-[40px] lg:left-1/3 freelance-span font-raleway">
        I'm
      </span>
    </div>
  );
};

export default Banner;
