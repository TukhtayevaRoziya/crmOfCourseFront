import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware:[thunk]
})
