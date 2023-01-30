import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './components/login/Login'
import Sidebar from './components/sidebar/Sidebar'
import PrivateRoute, { PrivateRouteForAdmin } from './utility/PrivateRoute'
import authToken from './utility/authToken'
import { store } from './redux/store'

import './App.css'
import 'antd/dist/reset.css'

function App() {
  useEffect(() => {
    if (localStorage.token) {
      authToken(localStorage.token)
    }

    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: 'LOGOUT' })
    })
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <PrivateRouteForAdmin>
              <Login />
            </PrivateRouteForAdmin>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRouteForAdmin>
              <Login />
            </PrivateRouteForAdmin>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <Sidebar />
            </PrivateRoute>
          }
        />
      </Routes> 
    </div>
  )
}

export default App
