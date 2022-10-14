import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';

import Book from './book/Book';
import { BookType } from '../../../store/booksSlice';
import showToast from '../../../validation/showToast';
import { addBook, reset } from '../../../store/booksSlice';
import getBooks from '../../../api/books/getBooks';
import Pagination from './pagination/Pagination';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch()
  const [skip, setSkip] = useState(0)
  const [quantityBooks, setQuantityBooks] = useState(0)
  const books = useAppSelector(state => state.books.book)

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
        quantityBooks={quantityBooks}
        skip={skip}/>
    </>
  );
}

export default CatalogBooks