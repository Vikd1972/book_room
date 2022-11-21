/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import getBooks from '../api/books/getBooks';
import getDetailBooks from '../api/books/getDetailBook';
import getRecommendationsBooks from '../api/books/getRecommendationsBooks';
import getFavoritesBooks from '../api/favorites/getFavoritesBooks';
import getComments from '../api/comments/getComments';
// import setComments from '../api/comments/setComments';
// import { setAverageRating } from './booksSlice';
// import { useAppDispatch } from './hooks';

export const getBooksThunk = createAsyncThunk('books',
  async (queryString: string) => {
    const response = await getBooks(queryString);
    return response;
  });

export const getDetailBooksThunk = createAsyncThunk('books/detail',
  async (bookId: number) => {
    const response = await getDetailBooks(bookId);
    // const dispatch = useAppDispatch();
    // dispatch(setAverageRating(response.data.averageRating));
    return response;
  });

export const getRecommendationsBookThunk = createAsyncThunk('/books/random',
  async () => {
    const response = await getRecommendationsBooks();
    return response;
  });

export const getFavoritesBookThunk = createAsyncThunk('/favorites',
  async (favorites: number[]) => {
    const response = await getFavoritesBooks(favorites);
    return response;
  });

export const getCommentsThunk = createAsyncThunk('/comments',
  async (bookId: number) => {
    const response = await getComments(bookId);
    return response;
  });
