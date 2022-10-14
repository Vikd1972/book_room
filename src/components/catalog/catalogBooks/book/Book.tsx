import React from 'react';
import { useAppSelector } from '../../../../store/hooks';

import BookWrapper from './Book.styles';
import { Button } from '../../../componentsUI/button/Buttons';

import { BookType } from '../../../../store/booksSlice'

type Props = {
  book: BookType;
};

export const Book: React.FC<Props> = (props) => {
  const currentPrice = props.book.paperbackQuantity ? props.book.paperbackPrice : props.book.hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  return (
    <BookWrapper>
      <div className='cover-container'>
        <img
          className='cover'
          src={props.book.pathToCover}
          alt='cover'
          id='cover' />
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
        text={textButton} />
    </BookWrapper >
  );
}

export default Book;