import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

type PrivateRouteType = {
  children: any
}

const PrivateRoute: FC<PrivateRouteType> = ({ children }) => {
  const { token } = useSelector((state: any) => state.authReducer)

  console.log(token)
  debugger

  if (token) return children
  else return <Navigate to="/" />
}

export default PrivateRoute
