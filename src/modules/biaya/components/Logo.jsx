import React from "react";
import Logoimg from "../images/LOGO_COLOUR_AK.png"

const Logo = () => (
  <div className="flex items-start self-stretch my-auto w-[142px]">
    <img
      loading="lazy"
      src={Logoimg}
      alt="Company Logo"
      className="object-contain aspect-[3.55] w-[142px]"
    />
  </div>
);

export default Logo;
