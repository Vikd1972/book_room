/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import Book from '../../components/Book/Book';
import showToast from '../../../validation/showToast';
import { getRecommendationsBookThunk } from '../../../store/booksThunks';

import RecommendationsWrapper from './Recommendations.styles';

export const Recommendations: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);
  // console.log(books);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getRecommendationsBookThunk()).unwrap();
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <RecommendationsWrapper>
      <div className="title">Recommendations</div>
      <div className="books">
        {books.map((book) => (
          <div key={book.id}>
            <Book
              book={book}
            />
          </div>
        ))}
      </div>
    </RecommendationsWrapper >
  );
};

export default Recommendations;
