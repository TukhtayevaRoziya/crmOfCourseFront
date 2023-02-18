import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import authToken from '../utility/authToken'
import { authReducer } from './reducers/authReducer'
import { sidebarReducer } from './reducers/sidebarReducer'
import { studentsReducer } from './reducers/studentsReducer';
import { teachersReducer } from './reducers/teachersReducer';

export const store = configureStore({
  reducer: {
    authReducer,
    studentsReducer,
    teachersReducer,
    sidebarReducer,
  },
  middleware: [thunk],
})

// window.store = store;

let currentState = store.getState()

store.subscribe(() => {
  let previousState = currentState
  currentState = store.getState()
  if (previousState.authReducer.token !== currentState.authReducer.token) {
    const token = currentState.authReducer.token
    authToken(token)
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
