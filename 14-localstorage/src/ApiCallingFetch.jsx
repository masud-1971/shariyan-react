import React from "react";

const ApiCalling = () => {
  // Using fetch
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);

    // const json = await response.json();
    // console.log(json);
  };

  return (
    <div>
      {/* API can be call in either <br /> fetch or <br /> axios */}
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default ApiCalling;
