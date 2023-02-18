import React, { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { StudentType } from "../home/unPaidStudents/Pagination";
import useWindowSize from "../../utility/hooks";

import styles from "./Students.module.css";
import { getAction } from "../../utility/api";
import { GET_ALL_STUDENTS } from "../../redux/actions/types";

const AllStudents = () => {
  const { width } = useWindowSize();

  const [data2, setData2] = useState<StudentType | any>([]);
  const [search, setSearch] = useState("");

  const pageSize = width <= 600 ? 5 : 10;

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);
  const { allStudents } = useSelector((state: any) => state.studentsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAction("students", GET_ALL_STUDENTS))
    setData2(allStudents);
  }, [allStudents, dispatch]);

  if (!allStudents) {
    return <div>No Un Paid Students yet</div>;
  }
  const onChange: PaginationProps["onChange"] = (page: any) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const onClick = () => {
    if (search) {
      const myData: StudentType[] = [];
      data2.filter((item: StudentType) =>
        String(item.id).includes(search) ? myData.push(item) : null
      );
      setCurrent(1);
      setMinIndex(0);
    }
  };

  const dataMap = allStudents.map(
    (d: StudentType, index: number) =>
      index >= minIndex &&
      index < maxIndex && (
        <div key={index} className={styles.dataWrap}>
          <strong>{++index}.</strong>
          <h1>
            {width <= 800
              ? d.name.slice(0, 6) === d.name.toString()
                ? d.name.toString()
                : d.name.toString().slice(0, 6) + "..."
              : width <= 1400
              ? d.name.length > 15
                ? d.name.slice(0, 14) + "..."
                : d.name
              : d.name.length > 18
              ? d.name.slice(0, 17) + "..."
              : d.name}
          </h1>
          <h2>{d.id}</h2>
          <h3>
            {d.className[d.className.length - 1] === "_"
              ? d.className.slice(0, d.className.length - 1)
              : "K:" + d.className}
          </h3>
          <h4>
            {!d.amount
              ? d.className === "a1_"
                ? "150.000"
                : d.className === "a1"
                ? "170.000"
                : d.className === "a2_"
                ? "180.000"
                : d.className === "a2"
                ? "190.000"
                : d.className === "b1_"
                ? "190.000"
                : d.className === "b1"
                ? "200.000"
                : d.className === "b2_"
                ? "200.000"
                : d.className === "b2"
                ? "210.000"
                : d.className === "c1_"
                ? "210.000"
                : d.className === "c1"
                ? "220.000"
                : ""
              : ""}
          </h4>
          {!d.payment ? (
            width <= 400 ? (
              <button className={styles.noPaid}>NO</button>
            ) : (
              <button className={styles.noPaid}>NoPaid</button>
            )
          ) : width <= 400 ? (
            <button className={styles.noPaid}>Yes</button>
          ) : (
            <button className={styles.paid}>Paid</button>
          )}
        </div>
      )
  );
  return (
    <div className={styles.wrap}>
      <div className={styles.search_add_block}>
        <form className={styles.search}>
          <input
            type={"search"}
            placeholder="Search Student..."
            enterKeyHint="enter"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
              if (search) {
                const myData: StudentType[] = [];
                data2.filter((item: StudentType) =>
                  String(item.id).includes(e.target.value)
                    ? myData.push(item)
                    : null
                );
              }
            }}
          />
          <button onClick={onClick}>Search</button>
        </form>
        <NavLink to={"/dashboard/students/add"} className={styles.add}>
          +{width > 770 ? " New Student" : width < 570 ? " " : " Student"}
        </NavLink>
      </div>

      <div className={styles.tableTH}>
        <strong>NO</strong>
        <h1>Fullname</h1>
        <h2>ID</h2>
        <h3>Class</h3>
        <h4>Amount</h4>
        <h5>{width <= 400 ? "Pay..." : "Payment"}</h5>
      </div>
      {dataMap}
      <Pagination
        current={current}
        onChange={onChange}
        total={allStudents.length}
        pageSize={pageSize}
      />
    </div>
  );
};

export default AllStudents;
