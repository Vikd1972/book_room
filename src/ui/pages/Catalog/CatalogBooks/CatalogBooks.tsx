/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

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

export const CatalogBooks: React.FC = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books);
  const users = useAppSelector((state) => state.users);

  useEffect(() => {
    (async () => {
      try {
        const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
        await dispatch(getBooksThunk(queryString)).unwrap();
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
