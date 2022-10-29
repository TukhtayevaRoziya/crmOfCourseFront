import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../redux/store' 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>