import axios from 'axios'
import React from 'react'

import styles from './Login.module.css'

const Login = () => {
  const btn = () => {
    axios
      .post('http://localhost:3001/login', {
        email: 'test@gmail.com',
        password: '12345673',
      })
      .then((res) => console.log(res.data))
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
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
              />
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                id="email"
                placeholder="example"
              />
              <button onClick={btn}>Click me</button>
          </div>
        </div>
      </div>
      <div className={styles.imgPart}></div>
    </div>
  )
}

export default Login
