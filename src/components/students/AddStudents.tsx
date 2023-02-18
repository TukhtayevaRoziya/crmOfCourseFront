import React, { useState } from "react";

import styles from "./AddStudents.module.css";
import api from "./../../utility/api";

const AddStudents = () => {
  const [leng, setLeng] = useState(0);
  const onSubmit = ({ target }: any) => {
    api.get("/students").then((res: any) => {
      setLeng(res.data.length);
    });
    const data = {
      name: target[0].value,
      surname: target[1].value,
      birthday: target[2].value,
      place: target[3].value,
      parentsName: target[4].value,
      email: target[5].value,
      tel: target[6].value,
      className: target[7].value,
      payment: target[8].checked,
      id: leng + 1,
    };
    api
      .post("students/add", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
      });
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
      placeholder: "+1234567890",
      type: "tel",
    },
    {
      id: 6,
      title: "Class name",
      children: (
        <select>
          <option value="a1_">A1</option>
          <option value="a1">A1(kids)</option>
          <option value="a2_">A2</option>
          <option value="a2">A2(kids)</option>
          <option value="b1_">B1</option>
          <option value="b1">B1(kids)</option>
          <option value="b2_">B2</option>
          <option value="b2">B2(kids)</option>
          <option value="c1_">C1</option>
          <option value="c1">C1(kids)</option>
        </select>
      ),
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
            <span className={styles.checkmark}></span>
          </div>
          <div>
            <input type={"radio"} name="toggle" required /> Debit
            <span className={styles.checkmark}></span>
          </div>
        </div>
      ),
    },
  ];

  const mapInpData = inpData.map((i) => {
    const cName = i.class ? i.class : "";
    return (
      <div className={styles.student_details_block + " " + cName} key={i.id}>
        <h2>{i.title} *</h2>
        {i.children ? (
          i.children
        ) : (
          <input placeholder={i.placeholder} required />
        )}
      </div>
    );
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.student_details}>
        <h1>Student Details</h1>
        <form onSubmit={onSubmit}>
          {mapInpData}
          <div
            className={
              styles.student_details_block + " " + styles.student_details__btn
            }
          >
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className={styles.parents_details}></div>
    </div>
  );
};

export default AddStudents;
