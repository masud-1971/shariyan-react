import React from "react";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div>
      <h1 className="text-8xl">Form</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          className="border-amber-400 border-4 p-3 m-2 text-[20px]"
          type="text"
          placeholder="Enter your name"
        />
        <input
          className="border-amber-400 border-4 p-3 m-2 text-[20px]"
          type="text"
          placeholder="Enter your email"
        />
        <div className="">
          <button
            className="bg-amber-500 text-white text-5xl p-3 m-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
