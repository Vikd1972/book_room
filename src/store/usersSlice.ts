import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookType } from "./booksSlice";

export interface UserType {    
  id: number,
  fullname: string,
  email: string,
  photoFilePath: string,
  favorites: BookType[]
}

export interface CartType {
  id: number,
  count: number,
  book: BookType,
}

interface UsersState {
  user: UserType,
  cart: CartType[],
  userFavorites: number[],
}

const initialState: UsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: '',
    favorites: []
  },
  cart: [],
  userFavorites: []
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserType>) => {  
      state.userFavorites = [];
      state.user = initialState.user;
      state.user = action.payload;     
      if (state.user.favorites) {        
        for (let book of Array.from(state.user.favorites)) {   
          state.userFavorites.push(book.id)
        }
      }
    },
    reset: () => initialState,
    addCart: (state, action: PayloadAction<CartType[]>) => {      
      state.cart = action.payload;
    }
  }
})

export const {
  loginUser,
  reset,
  addCart
} = usersSlice.actions

export default usersSlice.reducer