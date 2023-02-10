import React, { useState } from "react";
// import useWindowSize from "./../../utility/hooks";
import { useSelector } from "react-redux";

import styles from "./AddStudents.module.css";
import api from "./../../utility/api";

const AddStudents = () => {
  // const { width } = useWindowSize();
  const { token } = useSelector((state: any) => state.authReducer);
  const [isRequired, setIsRequired] = useState("");
  const [data, setData] = useState<any>([]);
  const onSubmit = (props: any) => {
    console.log(token);
    api.post("students/add", data).then((res) => {
      console.log(res.data);
    });
    setData({ name: props.target });
    console.log(props.target[0].value);
  };

  const inValid = (err: any) => {
    console.log(err);
    setIsRequired(styles.required);
  };

  const inpData = [
    { id: 0, title: "First Name", placeholder: "Samantha" },
    { id: 1, title: "Last Name", placeholder: "William" },
    {
      id: 2,
      title: "Date & Place of Birth ",
      children: (
        <div>
          <input type={"date"} placeholder="02/24/1997" required />
          <input type={"type"} placeholder="Jakarta" required />
        </div>
      ),
    },
    {
      id: 3,
      title: "Parent Name",
      placeholder: "William",
    },
    {
      id: 4,
      title: "Email",
      placeholder: "william@mail.com",
      type: "email",
    },
    {
      id: 5,
      title: "Phone",
      placeholder: "william@mail.com",
      type: "tel",
    },
    {
      id: 6,
      title: "Class name",
      placeholder: "A1",
    },
    {
      id: 7,
      title: "Payments",
      placeholder: "A1",
      class: styles.student_details_block_radio,
      children: (
        <div className={styles.student_details_block_radio_div}>
          <div>
            <input type={"radio"} name="toggle" required /> Cash
          </div>
          <div>
            <input type={"radio"} name="toggle" required /> Debit
          </div>
        </div>
      ),
    },
  ];

  const mapInpData = inpData.map((i) => {
    const name = data[i.id]?.value == '' ? isRequired : ''
    console.log(data)
    return(
    <div className={styles.student_details_block + " " + i.class + ' ' + name} key={i.id}>
      <h2>{i.title} *</h2>
      {i.children ? i.children : <input placeholder={i.placeholder} required />}
    </div>
  )});

  // const text =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
  return (
    <div className={styles.wrap}>
      <div className={styles.student_details}>
        <h1>Student Details</h1>
        <form onSubmit={onSubmit} onInvalid={inValid}>
          {mapInpData}
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
