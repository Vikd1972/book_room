import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';
import { useParams } from "react-router-dom";

import Book from './book/Book';
import showToast from '../../../validation/showToast';
import { addBook } from '../../../store/booksSlice';
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

  let { pageNumber } = useParams();  

  useEffect(() => {
    (async () => {
      try {
        const response = await getBooks(skip);
        setQuantityBooks(response.quantityBooks);         
        dispatch(addBook(response.books))
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
  
  const pagination = (direction: string) => {
    if (direction === 'left') {
      setSkip(skip === 0 ? skip : skip - config.pagination)        
    } else {
      setSkip(skip + config.pagination >= quantityBooks ? skip : skip + config.pagination)   
    }
    window.location.href = `/catalog/page/${activePage}`;
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
        pagination={pagination} />
      {!user.email ? <AuthorizePoster /> : null}
    </>
  );
}

export default CatalogBooks