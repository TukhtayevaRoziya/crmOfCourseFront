import React, { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { NavLink } from 'react-router-dom';

import api from "../../utility/api";
import { StudentType } from "../home/unPaidStudents/Pagination";
import useWindowSize from "../../utility/hooks";

import styles from "./Students.module.css";

const AllStudents = () => {
  const { width } = useWindowSize();

  const [data, setData] = useState<StudentType | any>([]);
  const [data2, setData2] = useState<StudentType | any>([]);
  const [search, setSearch] = useState("");

  const pageSize = width <= 600 ? 5 : 10;

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);

  useEffect(() => {
    api.get("/students").then((res) => {
      setData(res.data);
      setData2(res.data);
    });
  }, []);
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
      setData(myData);
      setCurrent(1);
      setMinIndex(0);
    } else setData(data2);
  };

  const dataMap = data.map(
    (d: StudentType, index: number) =>
      index >= minIndex &&
      index < maxIndex && (
        <div key={d.id} className={styles.dataWrap}>
          <strong>{++index}.</strong>
          <h1>
            {width <= 800
              ? d.fullName.split(" ", 1).toString().slice(0, 6) ===
                d.fullName.split(" ", 1).toString()
                ? d.fullName.split(" ", 1).toString()
                : d.fullName.split(" ", 1).toString().slice(0, 6) + "..."
              : width <= 1400
              ? d.fullName.length > 15
                ? d.fullName.slice(0, 14) + "..."
                : d.fullName
              : d.fullName.length > 18
              ? d.fullName.slice(0, 17) + "..."
              : d.fullName}
          </h1>
          <h2>{d.id}</h2>
          <h3>{d.class}</h3>
          <h4>{d.amount}</h4>
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
                setData(myData);
              } else setData(data2);
            }}
          />
          <button onClick={onClick}>Search</button>
        </form>
          <NavLink to={'/dashboard/students/add'} className={styles.add}>+ Add Student</NavLink>
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
        total={data.length}
        pageSize={pageSize}
      />
    </div>
  );
};

export default AllStudents;
