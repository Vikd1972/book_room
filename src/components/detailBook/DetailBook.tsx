import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useParams } from "react-router-dom";

import DetailBookWrapper from './DetailBook.styles';
import { Button } from '../componentsUI/button/Buttons';
import getDetailBooks from '../../api/books/getDetailBook';
import { AxiosError } from 'axios';
import showToast from '../../validation/showToast';
import Recommendations from '../recommendations/Recommendations';
import AuthorizePoster from '../authorizePoster/AuthorizePoster';

import { BookType } from '../../store/booksSlice'

export const DetailBook: React.FC = () => {
  const user = useAppSelector(state => state.users.user)
  const dispatch = useAppDispatch();
  const serviceInfo = useAppSelector(state => state.books.serviceInfo)

  const [book, setBook] = useState<BookType>()

  const { bookId } = useParams();
  console.log(bookId);
  

  useEffect(() => {
    (async () => {
      try {   
        const detailBook = await getDetailBooks(Number(bookId));   
        setBook(detailBook)
      }
      catch (err) {
        console.log('err');
        
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, []);

  let textButtonPaperback = '';
  let textButtonHardcover = '';

  if (book) {
    const currentPricePaperback = book.paperbackPrice;
    if (!currentPricePaperback) {
      textButtonPaperback = 'Not available'
    } else {
      textButtonPaperback = `$ ${currentPricePaperback?.toFixed(2).toString()} USD`;
    }
    const currentPriceHardcover = book.hardcoverPrice;
    if (!currentPriceHardcover) {
      textButtonHardcover = 'Not available'
    } else {
      textButtonHardcover = `$ ${currentPriceHardcover?.toFixed(2).toString()} USD`;
    }
  }

  return (
    <>
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
          <div className='description'>
            <span>Description</span><br /><br />
            {book?.description}
          </div>
          <div className='purchase'>
            <div>Paperback
              <Button
                type='button'
                className="button"
                text={textButtonPaperback}
                isDisable={book?.paperbackQuantity ? false : true}
              />
            </div>
            <div>Hardcover
              <Button
                type='button'
                className="button"
                text={textButtonHardcover}
                isDisable={book?.hardcoverQuantity ? false : true}
              />
            </div>
          </div>
        </div>
      </DetailBookWrapper >
      {!user.email ? <AuthorizePoster /> : null}
      <Recommendations />
    </>
  );
}

export default DetailBook;