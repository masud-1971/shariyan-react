import React from "react";

const App = () => {
  const btnClick = () => {
    console.log("Button Clicked");
  };

  const mouseEnter = () => {
    console.log("Mouse Entered");
  };

  const inputChange = (elem) => {
    console.log(elem.target.value);
  };

  const pageScroll = (elem) => {
    // console.log("Page Scrolling.......");
    console.log(elem.deltaY); // Positive value means scrolling down, negative means scrolling up
    if (elem.deltaY > 0) {
      console.log("Scrolling Down");
    } else {
      console.log("Scrolling Up");
    }
  };

  return (
    <div>
      <h1>Hello from App</h1>
      <button onMouseEnter={mouseEnter} onClick={btnClick}>
        Change User
      </button>

      <div>
        <input onChange={inputChange} type="text" placeholder="Enter Name" />
      </div>

      <div
        onMouseMove={(elem) => {
          console.log(elem.clientX, elem.clientY);
        }}
        className="box"
      ></div>
      <div onWheel={pageScroll}>
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
