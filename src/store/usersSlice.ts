/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { IBookType } from './booksSlice';

export interface IUserType {
  id: number;
  fullname: string;
  email: string;
  photoFilePath: string;
  cart: ICartType[];
  favorites: IBookType[];
}

export interface ICartType {
  id: number;
  count: number;
  book: IBookType;
}

interface IUsersState {
  user: IUserType;
  favorites: IBookType[];
  cart: ICartType[];
}

const initialState: IUsersState = {
  user: {
    id: 0,
    fullname: '',
    email: '',
    photoFilePath: '',
    cart: [],
    favorites: [],

  },
  favorites: [],
  cart: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<IUserType>) => {
      state.user = initialState.user;
      state.user = action.payload;
      state.cart = action.payload.cart;
      state.favorites = action.payload.favorites;
    },
    reset: () => initialState,
    setCart: (state, action: PayloadAction<ICartType[]>) => {
      state.cart = action.payload;
    },
    setFavorites: (state, action: PayloadAction<IBookType[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const {
  loginUser,
  reset,
  setCart,
  setFavorites,
} = usersSlice.actions;

export default usersSlice.reducer;
