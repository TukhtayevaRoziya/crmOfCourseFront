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
            <input type={'date'} placeholder="02/24/1997" />
          </div>
          </div>
        </main>
      </div>
      <div className={styles.parents_details}></div>
    </div>
  );
};

export default AddStudents;
