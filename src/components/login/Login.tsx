import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import img from "../../assets/image/login.png";

import login from "./../../redux/actions/authAction";

import styles from "./Login.module.css";
import api from "../../utility/api";
import { AxiosResponse } from "axios";
import { notification } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [api1, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();

  useEffect(() => {}, [navigate]);
type NotificationType = 'success' | 'info' | 'warning' | 'error';

  const openNotificationWithIcon = (type: NotificationType) => {
    api1[type]({
      title: 'Email or password wrong',
      description:
        'Please check your email or password',
    });
  };
  const btn = () => {
    if (!email || !password) {
      alert("Fill all field, please!");
    } else {
      api
        .post("login", {
          email: email,
          password: password,
        })
        .then((res: AxiosResponse) => {
          navigate("/dashboard");
          dispatch<any>(login({ email, password }));
        });
        openNotificationWithIcon('error')
    }
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      {     contextHolder}
      <div className={styles.mainPart}>
        <div className={styles.mainPart__Login}>
          <h1>
            <span style={{ color: "#297D3B" }}> IN </span> BUSINESS
          </h1>
          <h2>Log in</h2>
          <div className={styles.inp_group}>
            <>
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                required={true}
                autoComplete="off"
                onChange={onChangeEmail}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="parol"
                placeholder="example"
                required={true}
                onChange={onChangePassword}
              />
              <button onClick={btn}>Log in</button>
            </>
          </div>
        </div>
      </div>
      <div className={styles.imgPart}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Login;
