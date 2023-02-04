import React, { useEffect, useState } from "react";

import api from "../../utility/api";
import RightAdminNavbarIcons from "./RightAdminNavbar_Icons";

import styles from "./RightAdminNavbar.module.css";
import RightAdminNavbarBlock from "./RightAdminNavbar_Block";

const RightAdminNavbar = () => {
  const [data, setData] = useState({
    name: "Undefined",
    surname: "Undefined"
  });

  useEffect(() => {
    api.get("/").then((res) => {
      if (res.data) {
        setData(res.data[0]);
      }
    });
  }, []);

  if (!data) {
    return <h1>Wait...</h1>;
  }
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {/* @ts-ignore */}
        <RightAdminNavbarIcons data={data} />
        <div className={styles.header__adminInfo__wrap}>
          <div className={styles.header__adminInfo}>
            <h1>
              {data.name} {data.surname[0]}.
            </h1>
            <p>Admin</p>
          </div>
          <div
            className={styles.header__img}
            draggable={false}
          />
        </div>
      </div>
      <div className={styles.block}>
        <RightAdminNavbarBlock />
      </div>
    </div>
  );
};

export default RightAdminNavbar;
