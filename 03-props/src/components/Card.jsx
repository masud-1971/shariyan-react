import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1761857352384-aaae23a714a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764&h=500"
        alt="Profile"
      />
      <h2>
        {props.user}, {props.age}
      </h2>
      <p>This is a simple card component.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
