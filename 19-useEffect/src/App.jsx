import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  useEffect(function () {
    console.log("useEffect");
    document.title = `You clicked ${num} times`;
  }, []);

  return (
    <div>
      <h1 className="text-7xl text-blue-600">{num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
