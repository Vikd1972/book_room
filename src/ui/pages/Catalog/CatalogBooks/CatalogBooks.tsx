/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { setQueryString } from '../../../../store/booksSlice';
import { getBooksThunk } from '../../../../store/booksThunks';
import { setFavorites } from '../../../../store/usersSlice';
import { getCartThunk } from '../../../../store/usersThunks';
import showToast from '../../../../validation/showToast';
import Pagination from './Pagination/Pagination';
import Book from '../../../components/Book/Book';
import AuthorizePoster from '../../../components/AuthorizePoster/AuthorizePoster';

import СatalogBooksWrapper from './CatalogBooks.styles';

const socket = io('http://localhost:4001/');

export const CatalogBooks: React.FC = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books);
  const users = useAppSelector((state) => state.users);

  socket.on('hello', (arg) => {
    console.log(arg); // world
  });

  useEffect(() => {
    (async () => {
      try {
        const myQuery = {
          page: searchParams.get('page') || '',
          search: searchParams.get('search') || '',
          genres: searchParams.get('genres') || '',
          price: searchParams.get('price') || '',
          sort: searchParams.get('sort') || '',
        };
        await dispatch(getBooksThunk(myQuery)).unwrap();

        const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
        dispatch(setQueryString(queryString));
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchParams,
  ]);

  useEffect(() => {
    (async () => {
      try {
        if (users.user.email && !users.cart) {
          await dispatch(getCartThunk()).unwrap();
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dispatch,
  ]);

  useEffect(() => {
    dispatch(setFavorites(users.favorites));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    users.favorites,
  ]);

  return (
    <>
      <СatalogBooksWrapper>
        {books.books.map((book) => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </СatalogBooksWrapper >

      <Pagination />
      {!users.user.email && <AuthorizePoster />}
    </>
  );
};

export default CatalogBooks;
