import React, { useState, forwardRef, useRef, useEffect } from "react";

import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import styles from "./Pagination.module.css";
import { NavLink } from "react-router-dom";
import api from "../../../utility/api";
// import useWindowSize from "../../../utility/hooks";
export type StudentType = {
  id: number;
  name: string;
  surname: string;
  className: string;
  amount: string;
  payment: boolean;
};
const MyPagination = () => {
  const pageSize = 5;
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);
  const ref = useRef<HTMLDivElement>(null);

  const [value, setValue] = useState<StudentType>({
    id: 0,
    name: "Undefined",
    surname: "Undefined",
    className: "undefined",
    amount: "undefined",
    payment: false,
  });

  useEffect(() => {
    api
      .get("/students/unpaid")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!data.length) {

    return <div>No Un Paid Students yet</div>;
  }

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const ComponentToPrint = forwardRef((props: StudentType, ref: any) => {
    return (
      <div ref={ref} className={styles.print_body}>
        <div className={styles.print_body__chWrap}>
          <div className={styles.print_body__chWrap__title}>
            {/* <h1>Name Academy</h1> */}
            <h3>Unpaid Student</h3>
          </div>
          <div>
            <h2>FullName:</h2>
            <h2>Class:</h2>
            <h2>Amount:</h2>
            <h2>ID:</h2>
          </div>
          <div>
            <p>{props?.name}</p>

            <p>   {props.className[props.className.length - 1] === "_"
                  ? props.className.slice(0, props.className.length - 1)
                  : "Kids:" + props.className}</p>
            <p>{props?.amount}</p>
            <p>{props?.id}</p>
          </div>
        </div>
      </div>
    );
  });
  const dataMap = data.map(
    (d: StudentType, index: number) =>
      index >= minIndex &&
      index < maxIndex && (
        <div className={styles.tbody} key={index}>
          <div className={styles.tbody__student}>
            <h1>{++index}.</h1>
            <h2 className={styles.tbody__student_h2}>
              {d.name}
              {d.surname}
              {/* {width <= 800
                ? d.name.slice(0, 6) === d.name
                  ? d.name
                  : d.name.slice(0, 6) + "..."
                : width <= 1400
                ? d.name.length > 15
                  ? d.name.slice(0, 14) + "..."
                  : d.name
                : d.name.length > 18
                ? d.name.slice(0, 17) + "..."
                : d.name} */}
            </h2>
          </div>
          <h3>
            ID:
            {d.id
              ? d.id.toString().length > 8
                ? d.id.toString().slice(0, 6)
                : d.id.toString()
              : 324234234}
          </h3>
          <div className={styles.tbody__class}>
            <div>
              <h4>Class</h4>
              <h5>
                {d.className[d.className.length - 1] === "_"
                  ? d.className.slice(0, d.className.length - 1)
                  : "K:" + d.className}
              </h5>
            </div>
          </div>
          <h6>{d.amount}</h6>
          <div>
            <ReactToPrint content={() => ref.current}>
              <PrintContextConsumer>
                {({ handlePrint }) => (
                  <AiOutlinePrinter
                    onClick={() => {
                      if (value.id !== 0 && value.id === d.id) {
                        handlePrint();
                        return null;
                      } else {
                        setValue(d);
                        alert('DB Click "' + index + '" index');
                      }
                    }}
                  ></AiOutlinePrinter>
                )}
              </PrintContextConsumer>
            </ReactToPrint>
            {value.id !== 0 ? (
              <div style={{ display: "none" }}>
                <ComponentToPrint
                  ref={ref}
                  id={value.id}
                  name={value.name}
                  amount={value.amount} 
                  className={value.className}
                  surname={value.surname}
                  payment={value.payment}
                />
              </div>
            ) : null}

            <NavLink to={"/dashboard/students"}>
              <BsThreeDots />
            </NavLink>
          </div>
        </div>
      )
  );

  return (
    <>
      {dataMap}
      <Pagination
        current={current}
        onChange={onChange}
        total={data.length}
        pageSize={pageSize}
      />
    </>
  );
};

export default MyPagination;
