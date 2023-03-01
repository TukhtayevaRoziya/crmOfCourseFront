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
import { Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";

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

  interface DataType {
    key: React.Key;
    type?: string;
    students?: number
    started?: string
    time?: string
    amount?: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Type:",
      dataIndex: "type",
      render: (text: string) => <a href="/">{text}</a>,
    },
    {
      title: "Students",
      dataIndex: "students",
    },
    {
      title: "Started: ",
      dataIndex: "started",
    },
    {
      title: "Time: ",
      dataIndex: "time",
    },
    {
      title: "Amount: ",
      dataIndex: "amount",
    },
  ];

  const data2: DataType[] = [
    {
      key: "1",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,400,000',
    },
    {
      key: "2",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,400,000',
    },
    {
      key: "3",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,000,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
    {
      key: "4",
      type: "B2 (kids)",
      students: 14,
      started: '12',
      time: 'TTS  14:00',
      amount: '1,300,000',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      // disabled: record. === "Disabled User", // Column configuration not to be checked
      // name: record.name,
    }),
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
              <h1>Classes:</h1>
             
              <div>
                <button>Edit</button>
              </div>
            </div>
          </main>
        </div>
      );
    } else {
      return (<><div key={a._id}></div>
      </>);
    }
  });
  return <div>{map} </div>;
};

export default TeacherSingle;
