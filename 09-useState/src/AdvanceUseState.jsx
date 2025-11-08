import React from "react";
import { useState } from "react";

const AdvanceUseState = () => {
  const [num, setNum] = useState(10);

  const [user, setUser] = useState({ name: "Sheriyan", age: 22 });

  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const handleClick = () => {
    console.log(num);
    setNum(num + 20);
    console.log(num);
  };

  const showUser = () => {
    // console.log(user.name);
    // console.log(user.age);
    // const newUser = { ...user }; // creating a shallow copy of the user object
    // newUser.name = "Masud"; // updating the name property
    // newUser.age = 32; // updating the age property
    // setUser(newUser);
    setUser((prev) => ({ ...prev, name: "Rana", age: 32 }));
    console.log(user);
  };

  const updateArray = () => {
    const newArr = [...arr]; // creating a shallow copy of the array
    newArr.push(99); // adding a new element to the array
    setArr(newArr);
  };

  return (
    <div>
      <h1>{num}</h1>
      <h1>
        {user.name}, {user.age}
      </h1>
      <h1>{arr}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={showUser}>Show User</button>
      <button onClick={updateArray}>Update Array</button>
    </div>
  );
};

export default AdvanceUseState;
