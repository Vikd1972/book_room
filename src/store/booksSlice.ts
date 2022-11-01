/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IBookType {
  id: number;
  name: string;
  author: string;
  pathToCover: string;
  description: string;
  releasedAt: Date;
  paperbackPrice: number;
  paperbackQuantity: number;
  hardcoverPrice: number;
  hardcoverQuantity: number;
  isNew: boolean;
  isBestseller: boolean;
  genres: string[];
}

export interface IServiceInfo {
  quantityBooks: number;
  quantityPages: number;
  activePage: number;
  prevPage: number;
  nextPage: number;
  booksPerPage: number;
}

export interface IGenreType {
  id: number;
  name: string;
}
export interface IBooksState {
  books: IBookType[];
  genres: IGenreType[];
  queryString: string;
  serviceInfo: IServiceInfo;
}

const initialState: IBooksState = {
  books: [],
  genres: [],
  queryString: '',
  serviceInfo: {
    quantityBooks: 0,
    quantityPages: 0,
    activePage: 0,
    prevPage: 0,
    nextPage: 0,
    booksPerPage: 0,
  },
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state: IBooksState, action: PayloadAction<IBooksState>) => {
      state.books = action.payload.books;
      state.serviceInfo = action.payload.serviceInfo;
      state.genres = action.payload.genres;
    },
    addRecomBooks: (state: IBooksState, action: PayloadAction<IBookType[]>) => {
      state.books = action.payload;
    },
    loadQueryString: (state: IBooksState, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
  },
});

export const {
  addBooks,
  addRecomBooks,
  loadQueryString,
} = booksSlice.actions;

export default booksSlice.reducer;
