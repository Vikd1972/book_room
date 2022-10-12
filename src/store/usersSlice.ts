import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserType {    
  id: number,
  fullname: string,
  email: string,
  photoFilePath: string
}

interface UsersState {
  user: UserType
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
    loginUser: (state, action: PayloadAction<UserType>) => {     
      state.user = action.payload            
    },
    reset: () => initialState,
  }
})

export const {
  loginUser,
  reset,
} = usersSlice.actions

export default usersSlice.reducer