import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {    
  id?: number,
  fullname?: string,
  email?: string
}

interface UsersState {
  user: User,
  isLogged: boolean
}

const initialState: UsersState = {
  user: {
    id: 0,
    fullname: '',
    email: ''
  },
  isLogged: false
} 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {     
      state.user = {
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email            
      }      
    },
    loging: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload
    }
  }  
})

export const {
  loginUser,
  loging
} = usersSlice.actions

export default usersSlice.reducer