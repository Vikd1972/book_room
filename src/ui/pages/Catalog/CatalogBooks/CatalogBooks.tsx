/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { setQueryString } from '../../../../store/booksSlice';
import { getBooksThunk } from '../../../../store/booksThunks';
import { setCart, setFavorites } from '../../../../store/usersSlice';
import getCart from '../../../../api/cart/getCart';
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
        const queryString = `?${searchParams.toString()}`;
        await dispatch(getBooksThunk(queryString)).unwrap();
        Promise.all([
          users.user.email && await getCart(),
          // await getBooks(queryString),
        ]).then((result) => {
          // dispatch(addBooks(result[0]));

          if (result[0]) {
            dispatch(setCart(result[0] || []));
          }

          dispatch(setFavorites(users.favorites));
          const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';

          dispatch(setQueryString(queryString));
        });
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    books.queryString,
    searchParams,
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
