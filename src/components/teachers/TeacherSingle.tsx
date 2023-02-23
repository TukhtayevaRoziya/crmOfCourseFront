import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { GET_ALL_TEACHER } from "../../redux/actions/types";
import { TeacherDataType } from "../../utility/types";
import { getAction } from "../../utility/api";

import styles from "./TeacherSingle.module.css";
import { BiMap, BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Modal } from "antd";

const TeacherSingle = () => {
  const { id } = useParams();
  const { data } = useSelector((state: any) => state.teachersReducer);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch<any>(getAction("teachers", GET_ALL_TEACHER));
  }, [dispatch]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const map = data.map((a: TeacherDataType) => {
    if (id === a._id) {
      return (
        <div className={styles.body} key={a._id}>
          <header>
            <div>
              <h1>{a.name}</h1>
              <h2>{a.profession}</h2>
            </div>
          </header>
          <main>
            <div className={styles.main__header}>
              <div>
                <BiMap /> <p>Jakarta, Indonesia</p>
              </div>
              <div>
                <BiPhone /> <p>+12 345 6789 0</p>
              </div>
              <div>
                <AiOutlineMail /> <p>Historia@mail.com</p>
              </div>
              <div className={styles.main__header__delete}>
                <MdDelete onClick={showModal} />
              </div>
              <Modal
                title="Delete Teacher"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okType="danger"
                okText="Yes"
              >
                Are you sure you want to delete this teacher?
              </Modal>
            </div>
            <div className={styles.main__education}>
              <p>
                History Major, University Akademi Historia
                <span> (Master)</span>
              </p>
              <div>
                <button>Edit</button>
              </div>
            </div>
          </main>
        </div>
      );
    } else {
      return <div key={a._id}></div>;
    }
  });
  return <div>{map} </div>;
};

export default TeacherSingle;
