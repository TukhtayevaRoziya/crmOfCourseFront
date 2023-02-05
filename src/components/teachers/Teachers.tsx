import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { SlPhone } from "react-icons/sl";
import { GoMail } from "react-icons/go";

import useWindowSize from "../../utility/hooks";

import styles from "./Teachers.module.css";
import { Pagination, PaginationProps } from "antd";
import { NavLink } from "react-router-dom";

const Teachers = () => {
  const { width } = useWindowSize();

  const pageSize = width <= 600 ? 2 : 6;

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);

  const data = [
    {
      id: 1,
      fullname: "Dimitres Viga",
      profession: "Mathematics",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 2,
      fullname: "Tom Housenburg",
      profession: "Science",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 3,
      fullname: "Dana Benevista",
      profession: "Art",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 4,
      fullname: "Salvadore Morbeau",
      profession: "Biology",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 5,
      fullname: "Maria Historia",
      profession: "History",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 6,
      fullname: "Jack Sally",
      profession: "Physics",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 7,
      fullname: "Lula Beatrice",
      profession: "Algorithm",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 8,
      fullname: "Nella Vita",
      profession: "Engilsh",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 9,
      fullname: "Nadia Laravela",
      profession: "Programming",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 10,
      fullname: "Dakota Farral",
      profession: "Science",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 11,
      fullname: "Miranda Adila",
      profession: "Art",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
    {
      id: 12,
      fullname: "Indiana Barker",
      profession: "Biology",
      tel: 1234567890,
      email: "jordan@mail.com",
    },
  ];

  const onChange: PaginationProps["onChange"] = (page: any) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  };

  const dataMap = data.map(
    (d, index: number) =>
      index >= minIndex &&
      index < maxIndex && (
        <div className={styles.block} key={d.id}>
          <BsThreeDots />
          <div className={styles.img} />
          <h1>{width < 1151 ? d.fullname.slice(0, 15) : d.fullname}</h1>
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
