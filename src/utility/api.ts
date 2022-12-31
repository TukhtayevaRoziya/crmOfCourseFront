import axios from 'axios'

import { LOGOUT } from '../redux/actions/types'
import { store } from '../redux/store'

const api = axios.create({
  baseURL: 'http://localhost:3001/' || process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      store.dispatch({ type: LOGOUT })
    }
    return Promise.reject(err)
  },
)

export default api
