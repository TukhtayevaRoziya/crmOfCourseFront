import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyPagination from "./Pagination";
import api from "../../../utility/api";
import { unpaidStudent } from "./../../../redux/actions/studentsAction";

import styles from "./UnPainStudents.module.css";

const UnPainStudents = () => {
  const { unPaidStudents } = useSelector((state: any) => state.studentsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get("/students/unpaid")
      .then((res) => {
        dispatch<any>(unpaidStudent(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);
  if (!unPaidStudents) {

    return <div className={styles.error}>No Un Paid Students yet</div>;
  }
  return (
    <div className={styles.body}>
      <h1>Unpaid Student Intuition</h1>
      <MyPagination />
    </div>
  );
};

export default UnPainStudents;
