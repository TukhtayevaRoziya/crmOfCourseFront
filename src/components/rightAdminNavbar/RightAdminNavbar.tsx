import React, { useEffect, useState } from "react";

import api from "../../utility/api";
import RightAdminNavbarIcons from "./RightAdminNavbar_Icons";

import styles from "./RightAdminNavbar.module.css";
import RightAdminNavbarBlock from "./RightAdminNavbar_Block";

const RightAdminNavbar = () => {
  const [data, setData] = useState({
    name: "Undefined",
    surname: "Undefined",
    image:
      "https://www.kindpng.com/picc/m/247-2472302_admin-transparent-background-admin-icon-hd-png-download.png",
  });

  useEffect(() => {
    api.get("/").then((res) => {
      if (res.data) {
        setData(res.data);
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
              {data.name} {data.surname}.
            </h1>
            <p>Admin</p>
          </div>
          <img
            className={styles.header__img}
            draggable={false}
            src={data.image}
            alt=""
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
