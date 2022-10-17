import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { AxiosError } from 'axios';

import showToast from '../../../../validation/showToast';
import BookWrapper from './Book.styles';
import { Button } from '../../../componentsUI/button/Buttons';
import addBookToCart from '../../../../api/cart/addBookToCart';

import { BookType } from '../../../../store/booksSlice'

type Props = {
  book: BookType,
};

export const Book: React.FC<Props> = (props) => {
  const user = useAppSelector(state => state.users.user)
  // console.log(user);
  
  const [userId, setUserId] = useState<number>(0);
  const [bookId, setBookId] = useState<number>(0);

  const currentPrice = props.book.paperbackQuantity ? props.book.paperbackPrice : props.book.hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await addBookToCart({ userId, bookId });
        }
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [bookId]);
  
  const addToCart = () => {
    setUserId(user.id)
    setBookId(props.book.id)
  }

  return (
    <BookWrapper>
      <div className='cover-container'>
        <a
          href={`/detail/?id=${props.book.id}`}>
          <img
            src={props.book.pathToCover}
            alt='cover'
            id='cover' />
        </a>
      </div>
      <div className='name'>{props.book.name}</div>
      <div className='author'>{props.book.author}</div>
      <div className='rating'>
        <div className='star-container'>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
          <div className='star'></div>
        </div>
        <div className='rating-value'>5.0</div>
      </div>
      <Button
        type='button'
        className="button"
        onClick={addToCart}
        text={textButton} />
    </BookWrapper >
  );
}

export default Book;