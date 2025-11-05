import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <div className="py-3 px-18 h-[90vh] bg-gray-100 flex gap-10 items-center">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1Content;
