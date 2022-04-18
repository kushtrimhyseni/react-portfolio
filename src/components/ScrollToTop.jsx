import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top max-w-[1140px] mx-auto">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed right-[15px] bottom-[75px] cursor-pointer"
        >
          <FaArrowCircleUp color="#149DDD" size={32} />
        </div>
      )}
    </div>
  );
}
