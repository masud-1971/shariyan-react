import React from "react";
import axios from "axios";

const ApiCallingAxios = () => {
  const [data, setData] = React.useState([]);
  async function getData() {
    // console.log("Hellooooo");
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
    // const json = await response.json();
    // console.log(json);
  }

  return (
    <div>
      <button onClick={getData}>Get axios Data</button>
      <div>
        {data.map(function (elem, idx) {
          return (
            <h3>
              Hello {idx}, {elem.author}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default ApiCallingAxios;
