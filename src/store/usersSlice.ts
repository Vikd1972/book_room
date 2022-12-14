/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { getCartThunk } from './usersThunks';
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
    },

    setCart: (state, action: PayloadAction<ICartType[]>) => {
      state.cart = action.payload || initialState.cart;
    },

    setFavorites: (state, action: PayloadAction<IBookType[]>) => {
      state.favorites = action.payload || initialState.favorites;
    },

    addOrRemoveInCart: (state, action: PayloadAction<IBookType>) => {
      const bookIndex = state.cart.findIndex((item) => item.book.id === action.payload.id);
      if (bookIndex !== -1) {
        state.cart.splice(bookIndex, 1);
      } else {
        const newItem: ICartType = {
          id: Date.now(),
          count: 1,
          book: action.payload,
        };
        state.cart = [
          ...state.cart,
          newItem,
        ];
      }
    },

    changeQuantityInCart: (state, action: PayloadAction<{ count: number; cartId: number }>) => {
      state.cart.forEach((item) => {
        const newItem = item.id === action.payload.cartId ? item.count = action.payload.count : item;
        return newItem;
      });
    },

    reset: () => initialState,

    changeFavorites: (state, action: PayloadAction<IBookType>) => {
      const bookIndex = state.favorites.findIndex((item) => item.id === action.payload.id);
      if (bookIndex !== -1) {
        state.favorites.splice(bookIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCartThunk.fulfilled, (state, action) => {
      state.cart = action.payload.data.userCart;
    });
  },
});

export const {
  loginUser,
  reset,
  setCart,
  setFavorites,
  addOrRemoveInCart,
  changeQuantityInCart,
  changeFavorites,
} = usersSlice.actions;

export default usersSlice.reducer;
