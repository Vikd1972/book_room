import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';

import Book from './book/Book';
import { BookType } from '../../../store/booksSlice';
import showToast from '../../../validation/showToast';
import { addBook, reset } from '../../../store/booksSlice';
import getBooks from '../../../api/books/getBooks';
import Pagination from './pagination/Pagination';
import config from '../../../config';
import AuthorizePoster from '../../authorizePoster/AuthorizePoster';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch()
  const [skip, setSkip] = useState(0)
  const [quantityBooks, setQuantityBooks] = useState(0)
  const books = useAppSelector(state => state.books.books)
  const user = useAppSelector(state => state.users.user)
  

  useEffect(() => {
    (async () => {
      try {
        const response = await getBooks(skip);
        const allBooks: BookType[] = response.books;
        setQuantityBooks(response.quantityBooks);
        dispatch(reset())
        allBooks.forEach(book => {
          dispatch(addBook({
            ...book,
            paperbackPrice: book.paperbackPrice / 100,
            hardcoverPrice: book.hardcoverPrice / 100
          }))
        });
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [skip]);

  const quantityPages = Math.ceil(quantityBooks / config.pagination);  
  const activePage = (skip + config.pagination) / config.pagination;

  const scrolling = (direction: string) => {
    if (direction === 'left') {
      setSkip(skip === 0 ? skip : skip - config.pagination)  
    } else {
      setSkip(skip + config.pagination >= quantityBooks ? skip : skip + config.pagination)
    }
  }  

  return (
    <>
      <СatalogBooksWrapper>
        {books.map(book => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </СatalogBooksWrapper >

      <Pagination
        quantityPages={quantityPages}
        activePage={activePage}
        scrolling={scrolling} />
      {!user.email ? <AuthorizePoster /> : null}
    </>
  );
}

export default CatalogBooks