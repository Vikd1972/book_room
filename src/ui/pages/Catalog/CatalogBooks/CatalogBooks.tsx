import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";

import Book from '../../../components/Book/Book';
import showToast from '../../../../validation/showToast';
import { addBooks } from '../../../../store/booksSlice';
import getBooks from '../../../../api/books/getBooks';
import Pagination from './Pagination/Pagination';
import AuthorizePoster from '../../../components/AuthorizePoster/AuthorizePoster';
import QueryString from '../../../components/QueryString';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const books = useAppSelector(state => state.books)
  const user = useAppSelector(state => state.users.user)
  const queryString = QueryString();

  const url = new URL(window.location.href)

  const activePage = url.searchParams.get('page');
  
  useEffect(() => {
    (async () => {
      try {
        const options = {
          currentPage: Number(activePage),
          queryOptions: {
            currentGenres: url.searchParams.get('genres') || '',
            price: url.searchParams.get('price') || '',
            sort: url.searchParams.get('sort') || '',
            searchText: url.searchParams.get('search') || ''

          },
        }
        const response = await getBooks(options);
      
        dispatch(addBooks(response))
        navigate(`${queryString}page=${activePage}`)
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [
    activePage,
    queryString,
    url.searchParams,
    dispatch,
    navigate,
  ]);

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