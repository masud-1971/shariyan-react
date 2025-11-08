import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white h-14 w-14 rounded-full flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-lg leading-loose text-white mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          culpa rerum modi quaerat cum quo.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 text-white font-semibold px-7 py-2 rounded-full">
            {props.tag}
          </button>
          <button className="bg-blue-600 text-white font-semibold px-3 py-2 rounded-full">
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
