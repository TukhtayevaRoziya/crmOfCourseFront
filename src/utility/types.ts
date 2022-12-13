import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../redux/store' 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>


// Right Amdin Navbar Icons

export type RightAdminNavbar_Icons__PropsType = {
  email: string
  name: string
  password: string
  surname: string
  _id: number
  image:string
}