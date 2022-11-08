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
  averageRating: number;
  genres: string[];
  comment: string[];
  rating: number[];
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
export interface IRatingType {
  id: number;
  rating: number;
}

export interface IBooksState {
  books: IBookType[];
  genres: IGenreType[];
  queryString: string;
  ratingBook: number;
  serviceInfo: IServiceInfo;
}

const initialState: IBooksState = {
  books: [],
  genres: [],
  queryString: '',
  ratingBook: 0,
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
    addBooks: (state, action: PayloadAction<IBooksState>) => {
      state.books = action.payload.books;
      state.serviceInfo = action.payload.serviceInfo;
      state.genres = action.payload.genres;
    },
    addRecomBooks: (state, action: PayloadAction<IBookType[]>) => {
      state.books = action.payload;
    },
    loadQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
    setOverallRating: (state, action: PayloadAction<number>) => {
      state.ratingBook = action.payload;
    },
  },
});

export const {
  addBooks,
  addRecomBooks,
  loadQueryString,
  setOverallRating,
} = booksSlice.actions;

export default booksSlice.reducer;
