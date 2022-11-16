import React, { useEffect } from 'react';
import { AxiosError } from 'axios';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import Book from '../../components/Book/Book';
import showToast from '../../../validation/showToast';
import { addRecommendationsBooks } from '../../../store/booksSlice';
import getRecommendationsBooks from '../../../api/books/getRecommendationsBooks';

import RecommendationsWrapper from './Recommendations.styles';

export const Recommendations: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books.books);

  useEffect(() => {
    (async () => {
      try {
        const recommendationsBooks = await getRecommendationsBooks();
        dispatch(addRecommendationsBooks(recommendationsBooks));
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
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
