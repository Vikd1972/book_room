/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { addBooks } from '../../../../store/booksSlice';
import getBooks from '../../../../api/books/getBooks';
import { setCart, setFavorites } from '../../../../store/usersSlice';
import getCart from '../../../../api/cart/getCart';
import showToast from '../../../../validation/showToast';
import Pagination from './Pagination/Pagination';
import Book from '../../../components/Book/Book';
import AuthorizePoster from '../../../components/AuthorizePoster/AuthorizePoster';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.users.user);

  useEffect(() => {
    (async () => {
      try {
        const booksFromSever = await getBooks({
          queryString: books.queryString,
        });
        dispatch(addBooks(booksFromSever));

        const myCart = await getCart();
        dispatch(setCart(myCart));

        dispatch(setFavorites(user.favorites));

        navigate(`${books.queryString}`);
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [
    dispatch,
    navigate,
    books.queryString,
    user.favorites,
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
      {!user.email && <AuthorizePoster />}
    </>
  );
};

export default CatalogBooks;
