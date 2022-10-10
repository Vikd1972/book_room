import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {    
  id?: number,
  fullname?: string,
  email?: string,
  photoFilePath?: string
}

interface UsersState {
  user: User,
  isLogged: boolean
}

const initialState: UsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: ''
  },
  isLogged: false
} 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {     
      state.user = action.payload            
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