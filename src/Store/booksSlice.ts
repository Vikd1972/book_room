import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {    
  id?: number,
  fullname?: string,
  email?: string
}

interface BooksState {
  user: User
}

const initialState: BooksState = {
  user: {
    id: 0,
    fullname: '',
    email: ''
  } 
} 

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {     
      state.user = {
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email            
      }      
    }
  }  
})

export const {
  loginUser
} = booksSlice.actions

export default booksSlice.reducer