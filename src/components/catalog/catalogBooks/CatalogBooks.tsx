import React, {useState, useEffect} from 'react';
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { AxiosError } from 'axios';

import Book from './book/Book';
import { BookType } from '../../../store/booksSlice';
import showToast from '../../../validation/showToast';
import { addBook, reset } from '../../../store/booksSlice';
import getBooks from '../../../api/books/getBooks';

import СatalogBooksWrapper from './CatalogBooks.styles';

export const CatalogBooks: React.FC = () => {
  const dispatch = useAppDispatch()
  const [skip, setSkip] = useState(0)
  const books = useAppSelector(state => state.books.book)
  console.log(skip);
  console.log(books);
  
  

  useEffect(() => {
      (async () => {
        try {
          console.log(skip);          
          dispatch(reset())
          const allBook: BookType[] = await getBooks(skip);
          allBook.forEach(book => {            
            dispatch(addBook(book))
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
    <СatalogBooksWrapper>
      {books.map(book => (
        <div key={book.id}>
          <Book
            book={book}
          />
        </div>
      ))}
    </СatalogBooksWrapper >
  );
}

export default CatalogBooks