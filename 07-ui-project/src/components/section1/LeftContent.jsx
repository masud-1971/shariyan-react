import React from "react";
import "remixicon/fonts/remixicon.css";

const LeftContent = () => {
  return (
    <div className="h-full w-1/4 bg-gray-200 flex flex-col justify-between rounded-2xl">
      <div className="p-5">
        <h2 className="text-4xl font-bold">
          Prospective <br />{" "}
          <span className="text-gray-400">
            customer
          </span>{" "}
          <br /> segmentation
        </h2>
        <p className="mt-10 text-lg font-medium text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          eligendi esse sed accusantium dolorum nam exercitationem pariatur
          praesentium temporibus quos.
        </p>
      </div>
      <div className="text-8xl">
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
