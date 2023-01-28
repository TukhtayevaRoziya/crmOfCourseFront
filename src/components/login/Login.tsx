import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import img from '../../assets/image/login.png'

import login from './../../redux/actions/authAction'

import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { isAuth } = useSelector((state: any) => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isAuth) {
      navigate('/dashboard')
    }
  }, [isAuth, navigate])

  const btn = () => {
    if (!email || !password) {
      alert('Fill all field, please!')
    } else {
      const data = { email, password }
      dispatch<any>(login(data))
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
