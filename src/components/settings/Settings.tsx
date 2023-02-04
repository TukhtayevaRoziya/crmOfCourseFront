import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiMap, BiPhone, BiSave } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import api from "../../utility/api";
import styles from "./Settings.module.css";

type DataType = {
  name: string;
  surname: string;
  place: string;
  tel: string;
  email: string;
};

type ResType = {
  data: DataType;
};

const Settings = () => {
  const [data, setData] = useState<DataType>({
    name: "string;",
    surname: "string;",
    place: "string;",
    tel: "+12 345 6789 0",
    email: "jordan@mail.com",
  });

  const [str, setStr] = useState("");
  const [place, setPlace] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const [show, setShow] = useState(false);

  useEffect(() => {
    api.get("/").then((res) => {
      setData(res.data);
      setStr(data.name + " " + data.surname);
      setPlace(data.place);
      setTel(data.tel);
      setEmail(data.email);
    });
    console.log(show);
  }, [data.email, data.name, data.place, data.surname, data.tel, show]);

  const data3 = {
    name: str.split(" ", 1)[0],
    surname: str.split(" ", 2)[1],
    place: place,
    tel: tel,
    email: email,
  };
  
  const edit = () => {
    setShow(false);

    api.put("/settings", data3).then((res: ResType) => {
      setData(res.data);
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.img_back}>
        <div />
      </div>

      {show ? (
        <BiSave className={styles.dot} onClick={edit} />
      ) : (
        <BsThreeDots className={styles.dot} onClick={() => setShow(true)} />
      )}

      <div className={styles.block}>
        <div className={`${styles.first_b} ${styles.one}` }>
          {!show ? (
            <h1>
              {data.name} {data.surname}
            </h1>
          ) : (
            <input
              value={str}
              onChange={(e) => setStr(e.target.value)}
              placeholder="Fullname..."
            />
          )}
          <p>Admin</p>
          {!show ? (
            <h2>
              <BiMap /> {place}
            </h2>
          ) : (
            <input
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Place..."
            />
          )}
        </div>
        <div className={`${styles.first_b} ${styles.second_b} ${styles.two}`}>
          <h3>Phone</h3>
          <div>
            <h4>
              <BiPhone />
            </h4>
            {!show ? (
              <h5>{tel}</h5>
            ) : (
              <input
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Phone number..."
              />
            )}
          </div>
        </div>
        <div className={`${styles.first_b} ${styles.second_b} ${styles.three}`}>
          <h3>Email</h3>
          <div>
            <h4>
              <AiOutlineMail />
            </h4>
            {!show ? (
              <h5>{email}</h5>
            ) : (
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email..."
              />
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
