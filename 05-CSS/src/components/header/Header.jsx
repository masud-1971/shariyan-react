import React from "react";
import styles from "../header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>This is Header</h1>
      <button className={styles.btn}>Click Me</button>
    </div>
  );
};

export default Header;
