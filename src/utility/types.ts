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

export type TeacherDataType = {
  _id: string;
  id: number;
  name: string;
  surname: string;
  profession: string;
  tel: string;
  email: string;
  place?: string;
  university?: string;
  degree?: string;
  startWork?: string;
  finishWork?: string;
};