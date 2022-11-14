import React from 'react';

import type { ICartType } from '../../../../store/usersSlice';
import config from '../../../../config';
import QuantityChange from '../components/QuantityChange/QuantityChange';

import BookInCartWrapper from './BookInCart.styles';

interface IProps {
  cart: ICartType;
}

export const BookInCart: React.FC<IProps> = (props) => {
  const book = props.cart.book;

  const textButton = `$ ${(book.paperbackPrice / 100).toFixed(2).toString()} USD`;

  return (
    <BookInCartWrapper>
      <div className="cover-container">
        <img
          src={`${config.pathToCover}${book.pathToCover}`}
          alt="cover"
        />
      </div>
      <div className="purchase-info">
        <div className="wrapper-name">
          <h1 className="name">{book.name}</h1>
        </div>
        <p className="author">{book.author}</p>
        <QuantityChange
          cartId={props.cart.id}
          count={props.cart.count}
        />
        <p className="price">{textButton}</p>
      </div>
    </BookInCartWrapper>
  );
};

export default BookInCart;
