import api from './api'

const authToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `${token}`;

    localStorage.setItem('token', token)
  } else {
    localStorage.removeItem('token')
  }
}

export default authToken
