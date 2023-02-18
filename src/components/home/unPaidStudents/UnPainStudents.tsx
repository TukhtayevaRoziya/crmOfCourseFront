import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyPagination from "./Pagination";
import { getAction } from "../../../utility/api";

import styles from "./UnPainStudents.module.css";
import { GET_UNPAID_STUDENTS } from "./../../../redux/actions/types";

const UnPainStudents = () => {
  const { unPaidStudents } = useSelector((state: any) => state.studentsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAction("/students/unpaid", GET_UNPAID_STUDENTS));
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
