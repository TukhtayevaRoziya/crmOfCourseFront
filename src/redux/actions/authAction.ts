
import { Dispatch } from '@reduxjs/toolkit'
import { AppThunk } from '../../utility/types'
import api from './../../utility/api'

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types'

type BodyType = {
  email: string
  password: string
}

const login = (body: BodyType): AppThunk  => async (dispatch) => {
  try {
    const res = await api.post(`login`, body)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(checkToken(3600))
  } catch (err) {
    alert(err)
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export default login

export const logout = () =>  (dispatch: Dispatch) => {
  dispatch({ type: LOGOUT })
}

export const checkToken = (expirationTime: number) => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch(logout())
      console.log('token expired')
    }, expirationTime * 1000)
  }
}
