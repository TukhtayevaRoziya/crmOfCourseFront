import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './../actions/types'

type InitialStateType = {
  token: string | null
  isAuth: boolean
  loading: boolean
  data: any
}

const initialState: InitialStateType = {
  token: localStorage.getItem('token'),
  isAuth: false,
  loading: true,
  data: null
}

export const authReducer = (state = initialState, action: any):InitialStateType => {
  const { type, payload } = action
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuth: true,
        loading: false,
        data: payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        isAuth: true,
        loading: false,
        data: payload,
      }
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        token: null,
        isAuth: false,
        loading: false,
        data: null
      }
    default:
      return state
  }
}
