import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { AxiosError } from 'axios';

import Book from '../catalog/catalogBooks/book/Book';
import { BookType } from '../../store/booksSlice';
import showToast from '../../validation/showToast';
import { addBook, reset } from '../../store/booksSlice';
import getBooks from '../../api/books/getBooks';
import config from '../../config';
import getRecommendationsBooks from '../../api/books/getRecommendationsBooks';


import RecommendationsWrapper from './Recommendations.styles';

interface Options {
  quantityBooks: number,
}

export const Recommendations: React.FC<Options> = (props) => {
  const dispatch = useAppDispatch()
  const [skip, setSkip] = useState(0)
  const books = useAppSelector(state => state.books.books)




  useEffect(() => {
    (async () => {
      try {
        if (props.quantityBooks) {
          let randomBooks = [];
          for (let i = 0; i <= 3; i++) {
            randomBooks.push(Math.ceil(Math.random() * props.quantityBooks));
          }
          const response = await getRecommendationsBooks(randomBooks);
          const recommendationsBooks: BookType[] = response.books;
          recommendationsBooks.forEach(book => {
            dispatch(addBook({
              ...book,
              paperbackPrice: book.paperbackPrice / 100,
              hardcoverPrice: book.hardcoverPrice / 100
            }))
          });
        }
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [props.quantityBooks]);


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