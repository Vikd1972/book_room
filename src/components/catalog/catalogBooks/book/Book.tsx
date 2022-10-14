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
  const textButton = currentPrice.toString();

  return (
    <BookWrapper>
      <div className='cover-container'>
        <img
          className='cover'
          src={props.book.pathToCover}
          alt='cover'
          id='cover' />
      </div>
      <span className='name'>{props.book.name}</span>
      <span className='author'>{props.book.author}</span>
      <div className='rating'>rating</div>
      <Button
        type='button'
        className="button"
        text={textButton} />
    </BookWrapper >
  );
}

export default Book;