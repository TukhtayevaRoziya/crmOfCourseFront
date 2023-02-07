import React from "react";
import styles from "./AddStudents.module.css";

const AddStudents = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.student_details}>
        <h1>Student Details</h1>
        <main>
          <div className={styles.student_details_block}>
            <h2>First Name *</h2>
            <input placeholder="Samantha" />
          </div>
          <div className={styles.student_details_block}>
            <h2>Last Name *</h2>
            <input placeholder="William" />
          </div>
          <div className={styles.student_details_block}>
            <h2>Date & Place of Birth *</h2>
            <div>
              <input type={"date"} placeholder="02/24/1997" />
              <input type={"type"} placeholder="Jakarta" />
            </div>
          </div>
          <div className={styles.student_details_block}>
            <h2>Parent Name *</h2>
            <input placeholder="William" />
          </div>
          <div className={styles.student_details_block}>
            <h2>Email *</h2>
            <input type={"email"} placeholder="william@mail.com" />
          </div>
          <div className={styles.student_details_block}>
            <h2>Phone *</h2>
            <input type={"tel"} placeholder="+1234567890" />
          </div>
          <div className={styles.student_details_block}>
            <h2>Address *</h2>
            <textarea maxLength={2000} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
          </div>
        </main>
      </div>
      <div className={styles.parents_details}></div>
    </div>
  );
};

export default AddStudents;
