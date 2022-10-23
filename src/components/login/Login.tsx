import React from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import img from '../../assets/image/login.png'

import styles from './Login.module.css'

const Login = () => {
  // const [email, setEmail] = useState('test@gmail.com')
  // const [password, setPassword] = useState('1234567')
  const navigate = useNavigate()

  const btn = () => {
    axios
      .post('http://localhost:3001/login', {
        email: 'test@gmail.com',
        password: '1234567'
      })
      .then((res) => {
        navigate('/home')
        window.localStorage.setItem("token", res.data.token);
        console.log(res.data)
      })
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
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="parol"
                placeholder="example"
                required={true}
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
