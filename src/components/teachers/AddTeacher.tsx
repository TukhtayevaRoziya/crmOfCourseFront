import React from "react";
import styles from "./AddTeacher.module.css";
import { useDispatch } from 'react-redux';
import { createAction } from "../../utility/api";
import { CREATE_TEACHER } from "../../redux/actions/types";

const AddTeacher = () => {
  const dispatch = useDispatch()
  const onSubmit = (e: any) => {
    const data = {
      name: e.target[0].value,
      surname: e.target[1].value,
      birthday: e.target[2].value,
      place: e.target[3].value,
      university: e.target[4].value,
      degree: e.target[5].value,
      profession: e.target[6].value,
      startWork: e.target[7].value,
      finishWork: e.target[8].value,
      email: e.target[9].value,
      tel: e.target[10].value,
    }
    dispatch<any>(createAction('teachers/add', CREATE_TEACHER, data))
  };
  return (
    <div className={styles.wrap}>
      <header>Add Teacher</header>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">First name: </label>
          <input id="name" required />
        </div>
        <div>
          <label htmlFor="surname">Last Name: </label>
          <input id="surname" required />
        </div>
        <div>
          <label htmlFor="birthday">Birthday: </label>
          <input id="birthday" type={"date"} required />
        </div>
        <div>
          <label htmlFor="place">Place: </label>
          <input id="place" required />
        </div>
        <div>
          <label htmlFor="university">University: </label>
          <input id="university" required />
        </div>
        <div>
          <label htmlFor="degree">Degree: </label>
          <input id="degree" required />
        </div>
        <div>
          <label htmlFor="profession">Profession: </label>
          <input id="profession" required />
        </div>
        <div>
          <label htmlFor="startWork">StartWork: </label>
          <input id="startWork" required />
        </div>
        <div>
          <label htmlFor="finishWork">FinishWork: </label>
          <input id="finishWork" required />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type={"email"} required />
        </div>
        <div>
          <label htmlFor="tel">Phone: </label>
          <input id="tel" type={"tel"} required />
        </div>
        <div className={styles.btn_wrap}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
