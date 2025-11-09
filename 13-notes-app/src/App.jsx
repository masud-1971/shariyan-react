import React from "react";

const App = () => {
  return (
    <div>
      <form className="flex justify-between">
        <input type="text" placeholder="Enter task heading..." />
        <textarea placeholder="Enter task details..." name="" id=""></textarea>
        {/* <button type="submit">Add Note</button> */}
      </form>
    </div>
  );
};

export default App;
