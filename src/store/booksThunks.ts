/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import getBooks from '../api/books/getBooks';
import getDetailBooks from '../api/books/getDetailBook';
import { setAverageRating } from './booksSlice';
import { useAppDispatch } from './hooks';

export const getBooksThunk = createAsyncThunk('books',
  async (queryString: string) => {
    const response = await getBooks(queryString);
    return response;
  });

export const getDetailBooksThunk = createAsyncThunk('books/detail',
  async (bookId: number) => {
    const response = await getDetailBooks(bookId);
    const dispatch = useAppDispatch();
    // dispatch(setAverageRating(response.data.averageRating));
    return response;
  });
