import React, { useState } from "react";

const Binding = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted by", title);

    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <input
            className="block text-[18px] border-2 border-blue-500 p-2 m-2 w-full max-w-md"
            type="text"
            placeholder="Enter your name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className="m-2 p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Binding;
