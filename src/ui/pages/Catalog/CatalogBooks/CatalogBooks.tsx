import React, { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { addBooks } from '../../../../store/booksSlice';
import getBooks from '../../../../api/books/getBooks';
import getCart from '../../../../api/cart/getCart';
import showToast from '../../../../validation/showToast';
import Pagination from './Pagination/Pagination';
import Book from '../../../components/Book/Book';
import AuthorizePoster from '../../../components/AuthorizePoster/AuthorizePoster';

import СatalogBooksWrapper from './CatalogBooks.styles';
import { setCart } from '../../../../store/usersSlice';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const books = useAppSelector((state) => state.books);
  const user = useAppSelector((state) => state.users.user);

  useEffect(() => {
    (async () => {
      try {
        const options = {
          queryString: books.queryString,
        };
        const booksFromSever = await getBooks(options);
        dispatch(addBooks(booksFromSever));
        navigate(`${books.queryString}`);

        if (user.email) {
          const nyCart = await getCart();
          dispatch(setCart(nyCart));
        }
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
    user.email,
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
