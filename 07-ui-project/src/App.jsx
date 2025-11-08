import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1661627088684-c1269764daba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
      intro: "",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661627088684-c1269764daba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1752856408620-2e6fc6ac072f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=749",
      intro: "",
      tag: "Underserved",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
