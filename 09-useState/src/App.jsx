import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };

  const increaseByFive = () => {
    setNum(num + 5);
  };

  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increaseByFive}>Increase by 5</button>
      </div>
    </div>
  );
};

export default App;
