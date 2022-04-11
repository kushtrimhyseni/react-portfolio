import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <div className="flex justify-around items-center mt-4 w-full">
      <div className="test-color rounded-full w-[36px] h-[36px] bg-[#212431] flex justify-center items-center">
        <FontAwesomeIcon
          icon={faGoogle}
          color="white"
          size="lg"
          className="cursor-pointer change-color"
        />
      </div>
      <div className="rounded-full w-[36px] h-[36px] bg-[#212431] flex justify-center items-center">
        <FontAwesomeIcon
          icon={faFacebook}
          color="white"
          size="lg"
          className="cursor-pointer change-color"
        />
      </div>
      <div className="rounded-full w-[36px] h-[36px] bg-[#212431] flex justify-center items-center">
        <FontAwesomeIcon
          icon={faTwitter}
          color="white"
          size="lg"
          className="cursor-pointer change-color"
        />
      </div>
      <div className="rounded-full w-[36px] h-[36px] bg-[#212431] flex justify-center items-center">
        <FontAwesomeIcon
          icon={faInstagram}
          color="white"
          size="lg"
          className="cursor-pointer change-color"
        />
      </div>
      <div className="rounded-full w-[36px] h-[36px] bg-[#212431] flex justify-center items-center">
        <FontAwesomeIcon
          icon={faLinkedin}
          color="white"
          size="lg"
          className="cursor-pointer change-color"
        />
      </div>
    </div>
  );
};

export default Socials;
