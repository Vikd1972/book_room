import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { AxiosError } from 'axios';

import Book from '../catalog/catalogBooks/book/Book';
import showToast from '../../validation/showToast';
import { addBook } from '../../store/booksSlice';
import getRecommendationsBooks from '../../api/books/getRecommendationsBooks';


import RecommendationsWrapper from './Recommendations.styles';

export const Recommendations: React.FC = () => {
  const dispatch = useAppDispatch()
  const [skip, setSkip] = useState(0)
  const books = useAppSelector(state => state.books.books)

  useEffect(() => {
    (async () => {
      try {
        const response = await getRecommendationsBooks();
        dispatch(addBook(response.books))
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, []);

  return (
    <RecommendationsWrapper>
      <div className='title'>Recommendations</div>
      <div className='books'>
        {books.map(book => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </div>
    </RecommendationsWrapper >
  );
}

export default Recommendations