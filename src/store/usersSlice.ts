import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BookType } from "./booksSlice";

export interface UserType {    
  id: number,
  fullname: string,
  email: string,
  photoFilePath: string
}

export interface CartType {
  id: number,
  count: number,
  book: BookType,
}

interface UsersState {
  user: UserType,
  cart: CartType[],
}

const initialState: UsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: ''
  },
  cart: [{
    id: 0,
    count: 0,
    book: {
      id: 0,
      name: '',
      author: '',
      pathToCover: '',
      description: '',
      releasedAt: new Date(1901, 1, 1),
      paperbackPrice: 0,
      paperbackQuantity: 0,
      hardcoverPrice: 0,
      hardcoverQuantity: 0,
      isNew: false,
      isBestseller: false,
      genres: []
    }
  }],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserType>) => {     
      state.user = initialState.user;
      state.user = action.payload;           
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