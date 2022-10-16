import React, {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { Location } from 'react-router';
import { Link, useLocation, useNavigate } from "react-router-dom";

import DetailBookWrapper from './DetailBook.styles';
import { Button } from '../componentsUI/button/Buttons';
import getDetailBooks from '../../api/books/getDetailBook';
import { AxiosError } from 'axios';
import showToast from '../../validation/showToast';

import { BookType } from '../../store/booksSlice'


export const DetailBook: React.FC = () => {
  const location = useLocation();
  const [book, setBook] = useState<BookType>()
  
  useEffect(() => {
    (async () => {
      try {
        var bookId = +location.search.substring(1).split('=')[1];
        const book = await getDetailBooks(bookId);
        setBook(book.book)
        console.log(book.book);
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  },[]);  
  
  console.log({book});
  

  return (
    <DetailBookWrapper>
      <div className='cover-container'>
        <img
          src={book?.pathToCover}
          alt='cover'
          id='cover' />
      </div>
      <div className='info'>
        <div className='name'>{book?.name}</div>
        <div className='author'>{book?.author}</div>
        <div className='rating'>rating</div>
        <div className='description'>{book?.description}</div>
        <div className='purchase'>
          <Button
            type='button'
            className="button"
            text={'textButton'} />
          <Button
            type='button'
            className="button"
            text={'textButton'} />
        </div>
      </div>
    </DetailBookWrapper >
  );
}

export default DetailBook;