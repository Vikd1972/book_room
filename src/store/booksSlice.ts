/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserType } from './usersSlice';
import {
  getBooksThunk,
  getRecommendationsBookThunk,
  setCommentsThunk,
  getDetailBooksThunk,
  getAverageRatingThunk,
} from './booksThunks';

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

export interface ICommentType {
  id: number;
  comment: string;
  commentData: Date;
  user: IUserType;
}

export interface IBooksState {
  books: IBookType[];
  genres: IGenreType[];
  queryString: string;
  ratingBook: number;
  comments: ICommentType[];
  serviceInfo: IServiceInfo;
}

const initialState: IBooksState = {
  books: [],
  genres: [],
  queryString: '',
  ratingBook: 0,
  comments: [],
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
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.data.books;
      state.serviceInfo = action.payload.data.serviceInfo;
      state.genres = action.payload.data.genres;
    });
    builder.addCase(getDetailBooksThunk.fulfilled, (state, action) => {
      state.books[0] = action.payload.data.book;
      state.comments = action.payload.data.commentsOfBook;
      state.ratingBook = action.payload.data.book.averageRating;
    });
    builder.addCase(getRecommendationsBookThunk.fulfilled, (state, action) => {
      state.books.length = 1;
      state.books = [
        ...state.books,
        ...action.payload.data.books,
      ];
    });
    builder.addCase(setCommentsThunk.fulfilled, (state, action) => {
      state.comments = action.payload.data.commentsOfBook;
    });
    builder.addCase(getAverageRatingThunk.fulfilled, (state, action) => {
      state.ratingBook = action.payload.data.averageRatingBook;
    });
  },
});

export const {
  setQueryString,
} = booksSlice.actions;

export default booksSlice.reducer;
