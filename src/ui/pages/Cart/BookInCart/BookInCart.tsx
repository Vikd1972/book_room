import React from 'react';

import type { ICartType } from '../../../../store/usersSlice';
import type { IBookType } from '../../../../store/booksSlice';
import QuantityChange from '../components/QuantityChange/QuantityChange';

import BookInCartWrapper from './BookInCart.styles';

interface IProps {
  cart: ICartType;
  userId: number;
}

export const BookInCart: React.FC<IProps> = (props) => {
  const book: IBookType = props.cart.book;

  const paperbackPrice = +(book.paperbackPrice / 100).toFixed(2);
  const hardcoverPrice = +(book.hardcoverPrice / 100).toFixed(2);
  const currentPrice = paperbackPrice || hardcoverPrice;
  const textButton = `$ ${currentPrice.toFixed(2).toString()} USD`;

  return (
    <BookInCartWrapper>
      <div className="cover-container">
        <img
          src={`http://localhost:4001/covers/${book.pathToCover}`}
          alt="cover"
          id="cover"
        />
      </div>
      <div className="buy-info">
        <h1 className="name">{book.name}</h1>
        <p className="author">{book.author}</p>
        <QuantityChange
          id={props.cart.id}
          count={props.cart.count}
          userId={props.userId}
        />
        <p className="price">{textButton}</p>
      </div>
    </BookInCartWrapper>
  );
};

export default BookInCart;
