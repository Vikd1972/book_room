import { createAsyncThunk } from '@reduxjs/toolkit';

import getBooks from '../api/books/getBooks';
import getDetailBooks from '../api/books/getDetailBook';
import getRecommendationsBooks from '../api/books/getRecommendationsBooks';
import setComments from '../api/comments/setComments';
import setRating from '../api/rating/setRating';

type MyQueryType = {
  page: string;
  search: string;
  genres: string;
  price: string;
  sort: string;
};

export const getBooksThunk = createAsyncThunk('books',
  async (myQuery: MyQueryType) => {
    const response = await getBooks(myQuery);
    return response;
  });

export const getDetailBooksThunk = createAsyncThunk('books/detail',
  async (bookId: number) => {
    const response = await getDetailBooks(bookId);
    return response;
  });

export const getRecommendationsBookThunk = createAsyncThunk('/books/random',
  async () => {
    const response = await getRecommendationsBooks();
    return response;
  });

interface IRatingParams {
  onRating?: number;
  bookId: number;
}

export const getAverageRatingThunk = createAsyncThunk('/rating',
  async (options: IRatingParams) => {
    const response = await setRating(options);
    return response;
  });

interface ICommentsParams {
  comment: string;
  bookId: number;
}

export const setCommentsThunk = createAsyncThunk('/comments',
  async (options: ICommentsParams) => {
    const response = await setComments(options);
    return response;
  });
