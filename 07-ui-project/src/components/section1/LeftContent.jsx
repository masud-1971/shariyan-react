import React from "react";
import "remixicon/fonts/remixicon.css";
import Arrow from "./Arrow";
import HeroText from "./HeroText";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 bg-gray-200 flex flex-col justify-between rounded-2xl">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
