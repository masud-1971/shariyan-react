import React from "react";
import ApiCallingFetch from "./ApiCallingFetch";
import ApiCallingAxios from "./ApiCallingAxios";

const App = () => {
  localStorage.setItem("user", "Masud");
  localStorage.setItem("age", 101);
  localStorage.setItem("address", "Dhaka");

  const user = localStorage.getItem("user");
  const age = localStorage.getItem("age");
  const address = localStorage.getItem("address");

  // localStorage.clear("address");
  // localStorage.removeItem("address");
  // localStorage.crear();

  // console.log(user, age, address);

  // local storage as an object

  const userObj = {
    name: "Rana",
    age: 101,
    address: "Dhaka",
  };

  localStorage.setItem("userObj", JSON.stringify(userObj));

  const userMe = JSON.parse(localStorage.getItem("userObj"));
  // console.log(userMe);

  return (
    <div>
      local storage
      {/* <ApiCallingFetch /> */}
      <ApiCallingAxios />
    </div>
  );
};

export default App;
