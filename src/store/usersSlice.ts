import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {    
  id?: number,
  fullname?: string,
  email?: string,
  photoFilePath?: string
}

interface UsersState {
  user: User
}

const initialState: UsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: ''
  },
} 

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {     
      state.user = action.payload            
    },
  }  
})

export const {
  loginUser,
} = usersSlice.actions

export default usersSlice.reducer