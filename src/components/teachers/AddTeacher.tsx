import React from "react";
import styles from "./AddTeacher.module.css";

const AddTeacher = () => {
  return (
    <div className={styles.wrap}>
      <header>Add Teacher</header>
      <form>
        <div>
          <label htmlFor="name">First name: </label>
          <input id="name" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input id="lastName" />
        </div>
        <div>
          <label htmlFor="lang">First name: </label>
          <input id="lang" />
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
