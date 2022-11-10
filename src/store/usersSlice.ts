/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IBookType } from './booksSlice';

export interface IUserType {
  id: number;
  fullname: string;
  email: string;
  photoFilePath: string;
  favorites: IBookType[];
}

export interface ICartType {
  id: number;
  count: number;
  book: IBookType;
}

interface IUsersState {
  user: IUserType;
  cart: ICartType[];
  userFavorites: number[];
}

const initialState: IUsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: '',
    favorites: [],
  },
  cart: [],
  userFavorites: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IUserType>) => {
      state.userFavorites = [];
      state.user = initialState.user;
      state.user = action.payload;
      if (state.user.favorites) {
        for (const book of Array.from(state.user.favorites)) {
          state.userFavorites.push(book.id);
        }
      }
    },
    reset: () => initialState,
    setCart: (state, action: PayloadAction<ICartType[]>) => {
      state.cart = action.payload;
    },
  },
});

export const {
  loginUser,
  reset,
  setCart,
} = usersSlice.actions;

export default usersSlice.reducer;
