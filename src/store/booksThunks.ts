import { createAsyncThunk } from '@reduxjs/toolkit';

import getBooks from '../api/books/getBooks';
import getDetailBooks from '../api/books/getDetailBook';
import getRecommendationsBooks from '../api/books/getRecommendationsBooks';
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

type OptionType = {
  bookId: number;
  userId: number;
};

export const getDetailBooksThunk = createAsyncThunk('books/detail',
  async (option: OptionType) => {
    const response = await getDetailBooks(option);
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
