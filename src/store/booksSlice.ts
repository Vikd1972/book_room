/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IUserType } from './usersSlice';
import {
  getBooksThunk,
  getRecommendationsBookThunk,
  getFavoritesBookThunk,
  getCommentsThunk,
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
    setAverageRating: (state, action: PayloadAction<number>) => {
      state.ratingBook = action.payload;
    },
    setQueryString: (state, action: PayloadAction<string>) => {
      state.queryString = action.payload;
    },
    // addRecommendationsBooks: (state, action: PayloadAction<IBookType[]>) => {
    //   state.books = action.payload;
    // },
    // addFavoritesBooks: (state, action: PayloadAction<IBookType[]>) => {
    //   state.books = action.payload;
    // },
    // getCommentsOfBook: (state, action: PayloadAction<ICommentType[]>) => {
    //   state.comments = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.data.books;
      state.serviceInfo = action.payload.data.serviceInfo;
      state.genres = action.payload.data.genres;
    });
    builder.addCase(getRecommendationsBookThunk.fulfilled, (state, action) => {
      state.books = action.payload.data.books;
    });
    builder.addCase(getFavoritesBookThunk.fulfilled, (state, action) => {
      state.books = action.payload.data.books;
    });
    builder.addCase(getCommentsThunk.fulfilled, (state, action) => {
      state.comments = action.payload.data.commentsOfBook;
    });
  },
});

export const {
  setQueryString,
  setAverageRating,
  // getCommentsOfBook,
} = booksSlice.actions;

export default booksSlice.reducer;
