import React from 'react';

import { CartType } from '../../../../store/usersSlice';
import { BookType } from '../../../../store/booksSlice';
import QuantityChange from '../QuantityChange/QuantityChange'

import BookInCartWrapper from './BookInCart.styles'

interface Props {
  cart: CartType,
  userId: number,
}

export const BookInCart: React.FC<Props> = (props) => {
  const book: BookType = props.cart.book

  const paperbackPrice = +(book.paperbackPrice / 100).toFixed(2);
  const hardcoverPrice = +(book.hardcoverPrice / 100).toFixed(2);
  const currentPrice = paperbackPrice ?
    paperbackPrice : hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  return (
    <BookInCartWrapper>
      <div className='cover-container'>
        <img
          src={book.pathToCover}
          alt='cover'
          id='cover' />
      </div>
      <div className='buy-info'>
        <h1 className='name'>{book.name}</h1>
        <p className='author'>{book.author}</p>
        <QuantityChange
          id={props.cart.id}
          count={props.cart.count}
          userId={props.userId} />
        <p className='price'>{textButton}</p>
      </div>
    </BookInCartWrapper>
  )
}

export default BookInCart
