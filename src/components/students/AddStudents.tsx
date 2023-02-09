import React, { useState } from "react";
import useWindowSize from "./../../utility/hooks";
import { useSelector } from "react-redux";

import styles from "./AddStudents.module.css";
import api from "./../../utility/api";

const AddStudents = () => {
  const { width } = useWindowSize();
  const { token } = useSelector((state: any) => state.authReducer);
  const [data, setData] = useState({});
  const onSubmit = (props: any) => {
    console.log(token);
    api.post("students/add", data).then((res) => {
      console.log(res.data);
    });
    setData({ name: props.target[0].value });
    console.log(props.target[0].value);
  };

  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <div className={styles.wrap}>
      <div className={styles.student_details}>
        <h1>Student Details</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.student_details_block}>
            <h2>First Name *</h2>
            <input placeholder="Samantha" required />
          </div>
          <div className={styles.student_details_block}>
            <h2>Last Name *</h2>
            <input placeholder="William" required />
          </div>
          <div className={styles.student_details_block}>
            <h2>Date & Place of Birth *</h2>
            <div>
              <input type={"date"} placeholder="02/24/1997" required />
              <input type={"type"} placeholder="Jakarta" required />
            </div>
          </div>
          <div className={styles.student_details_block}>
            <h2>Parent Name *</h2>
            <input placeholder="William" required />
          </div>
          <div className={styles.student_details_block}>
            <h2>Email *</h2>
            <input type={"email"} placeholder="william@mail.com" required />
          </div>
          <div className={styles.student_details_block}>
            <h2>Phone *</h2>
            <input type={"tel"} placeholder="+1234567890" required />
          </div>
          <div
            className={
              styles.student_details_block +
              " " +
              styles.student_details_block_text
            }
          >
            <h2>Class name *</h2>
            <input type={"type"} placeholder="A1" required />

            {/* <textarea
              style={{ resize: "none" }}
              maxLength={2000}
              // minLength={100}
              placeholder={width < 500 ? text.slice(0, 100) + "..." : text}
              required
            /> */}
          </div>
          <div
            className={
              styles.student_details_block +
              " " +
              styles.student_details_block_text
            }
          >
              <h2>Payments *</h2>
            <input type={"radio"} name="toggle" placeholder="A1" required />
            <input type={"radio"} name="toggle" placeholder="A1" required />
            </div>
          <div
            className={
              styles.student_details_block + " " + styles.student_details__btn
            }
          >
            <button>Save as Draft</button>
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.parents_details}></div>
    </div>
  );
};

export default AddStudents;
