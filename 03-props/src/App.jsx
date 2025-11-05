import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Masud" age={101} />
      <Card user="Rana" age={100} />
      <Card user="Aryan" age={99} />
      <Card user="Samudro" age={98} />
      <Card user="Rakib" age={97} />
      <Card user="Sakib" age={96} />
      <Card user="Sohel" age={95} />
    </div>
  );
};

export default App;
