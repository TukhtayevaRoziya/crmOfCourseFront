import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import img from '../../assets/image/login.png'

import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const btn = () => {
    if (!email || !password) {
      alert('Fill all field, please!')
    } else {
      axios
        .post('http://localhost:3001/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          navigate('/home')
          window.localStorage.setItem('token', res.data.token)
          console.log(res)
        })
        .catch((error) => {
          alert('Email or Password is incorrect')
        })
    }
  }

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainPart}>
        <div className={styles.mainPart__Login}>
          <h1>
            <span style={{ color: '#297D3B' }}> IN </span> BUSINESS
            {/* <button onClick={btn}>btn</button> */}
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
  )
}

export default Login
