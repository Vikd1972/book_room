import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';
import { useParams } from "react-router-dom";

import Book from '../book/Book';
import showToast from '../../../validation/showToast';
import { addBooks } from '../../../store/booksSlice';
import getBooks from '../../../api/books/getBooks';
import Pagination from '../../componentsUI/pagination/Pagination';
import AuthorizePoster from '../../authorizePoster/AuthorizePoster';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch()
  const books = useAppSelector(state => state.books)
  const user = useAppSelector(state => state.users.user)

  let pageNumber = useParams();

  useEffect(() => {
    (async () => {
      try {
        const options = {
          currentPage: Number(pageNumber.activePage),
          genres: books.currentGenres
        }
        const response = await getBooks(options);  
        
        dispatch(addBooks(response))
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [pageNumber.activePage]);
  
  return (
    <>
      <СatalogBooksWrapper>
        {books.books.map(book => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </СatalogBooksWrapper >

      <Pagination />
      {!user.email ? <AuthorizePoster /> : null}
    </>
  );
}

export default CatalogBooks