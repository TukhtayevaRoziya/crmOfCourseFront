import { api } from './../../utility/api'

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types'

export const login = (body: any) => async (dispatch: any) => {
  try {
    const res = await api.post(`/auth`, body)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    })
    dispatch(checkToken(3600))
  } catch (err) {
    console.log(err)
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

export const logout = () => (dispatch: any) => {
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
