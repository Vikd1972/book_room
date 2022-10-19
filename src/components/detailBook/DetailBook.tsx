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
import addBookToCart from '../../api/cart/addBookToCart';
import getCart from '../../api/cart/getCart';
import { addCart } from '../../store/usersSlice';

import { BookType } from '../../store/booksSlice'

export const DetailBook: React.FC = () => {
  const user = useAppSelector(state => state.users.user)
  const dispatch = useAppDispatch();

  const [book, setBook] = useState<BookType>()

  const { bookId } = useParams();

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

  const addToCart = async () => {
    if (book) {
      const userId = user.id;
      const bookId = book?.id;
      await addBookToCart({ userId, bookId });
      const cart = await getCart(userId);
      dispatch(addCart(cart));
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
          <h1 className='name'>{book?.name}</h1>
          <p className='author'>{book?.author}</p>
          <div className='rating'>rating</div>
          <p className='description'>
            <span>Description</span><br /><br />
            {book?.description}
          </p>
          <div className='purchase'>
            <div>Paperback
              <Button
                type='button'
                className="button"
                text={textButtonPaperback}
                onClick={addToCart}
                isDisable={book?.paperbackQuantity ? false : true}
              />
            </div>
            <div>Hardcover
              <Button
                type='button'
                className="button"
                text={textButtonHardcover}
                onClick={addToCart}
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