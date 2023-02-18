import React, { useEffect, useState } from "react";
import { Pagination, PaginationProps } from "antd";
import { NavLink } from "react-router-dom";

import { BsThreeDots } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { SlPhone } from "react-icons/sl";
import { GoMail } from "react-icons/go";

import useWindowSize from "../../utility/hooks";
import { getAction } from './../../utility/api';

import styles from "./Teachers.module.css";
import { GET_ALL_TEACHER } from './../../redux/actions/types';
import { useDispatch, useSelector } from "react-redux";

const Teachers = () => {
  const { width } = useWindowSize();
  const { data } = useSelector((state:any) => state.teachersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAction("teachers", GET_ALL_TEACHER));
  }, [dispatch]);

  const pageSize = width <= 600 ? 2 : 6;

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);

  const onChange: PaginationProps["onChange"] = (page: any) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };
  type DataType = {
    id: number
    name: string
    surname: string
    profession: string
    tel: string
    email: string
  }

  if(!data.length){
    return <h1>No Teachers yet</h1>
  }

  const dataMap = data.map(
    (d:DataType, index: number) =>
      index >= minIndex &&
      index < maxIndex && (
        <div className={styles.block} key={index}>
          <BsThreeDots />
          <div className={styles.img} />
          <h1>{width < 1151 ? ` ${d.name} ${d.surname[0]}.` : ` ${d.name} ${d.surname}`}</h1>
          <h2>{d.profession}</h2>
          <div className={styles.contact}>
            <a href={`tel:+${d.tel}`} type="tel">
              <SlPhone />
            </a>
            <a href={`mailto:${d.email}`} type="mail">
              <GoMail />
            </a>
          </div>
        </div>
      )
  );
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div>
          <BiSearch />
          <input placeholder="Search here..." />
        </div>
        <NavLink to={"/dashboard/teachers/add"}>+ New Student</NavLink>
      </div>
      <div className={styles.body}>
        {dataMap}

        <Pagination
          current={current}
          onChange={onChange}
          total={data.length}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Teachers;
