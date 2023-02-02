import React, { useEffect, useState } from "react";
import { BsFillPencilFill, BsFillSaveFill } from "react-icons/bs";

import api from "../../utility/api";
import styles from "./Settings.module.css";

type DataType = {
  name: string;
  surname: string;
  image: string;
};

type ResType = {
  data: DataType;
};

const Settings = () => {
  const [data, setData] = useState<DataType>({
    name: "string;",
    surname: "string;",
    image: "string;",
  });
  const [str, setStr] = useState("");

  const [type, setType] = useState(false);

  useEffect(() => {
    api.get("/").then((res: ResType) => {
      setData(res.data);
      setStr(res.data.name + " " + res.data.surname);
    });
  }, []);

  const data3 = { 
    name: str.split(' ', 1),
    surname: str.split(' ', 2)[1],
    image: 'sdfsdfsdf'
  }
  const edit = () => {
    api.put("/settings", data3).then((res) => {
      setData(res.data);
    });
    setType(false);
  };

  return (
    <div className={styles.body}>
      <div className={styles.img_back}>
        <img src={data.image} alt="dsfdsf" />
      </div>
      <div className={styles.block}>
        {!type ? (
          <>
            <h1>
              {data.name} {data.surname}
            </h1>{" "}
            <BsFillPencilFill
              onClick={() => {
                setType(true);
              }}
            />
          </>
        ) : (
          <>
            <input value={str} onChange={(e) => setStr(e.target.value)} />
            <BsFillSaveFill onClick={edit} />
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;
