import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'  
import booksReducer from './booksSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    books: booksReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store }
