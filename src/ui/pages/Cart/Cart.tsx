/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Buttons';
import { useAppSelector } from '../../../store/hooks';
import EmptyCart from './EmptyCart/EmptyCart';
import BookInCart from './BookInCart/BookInCart';

import CartWrapper from './Cart.styles';

export const Cart: React.FC = () => {
  const users = useAppSelector((state) => state.users);
  const queryString = useAppSelector((state) => state.books.queryString);

  let total = 0;
  for (const item of users.cart) {
    const currentPrice = item.book.paperbackPrice
      ? item.book.paperbackPrice
      : item.book.hardcoverPrice;
    const pricePerItem = item.count * (currentPrice / 100);
    total += pricePerItem;
  }

  return (
    <CartWrapper>
      {!users.cart.length && <EmptyCart />}
      {users.cart.map((cart) => (
        <div key={cart.id}>
          <BookInCart
            cart={cart}
            userId={users.user.id}
          />
        </div>
      ))}
      {users.cart.length !== 0
        ? (<>
          <p className="total">Total: <b>{total.toFixed(2)}</b></p>
          <div className="buttons">
            <Link
              className="navi"
              to={`/${queryString}`}
            >
              Continue shopping
            </Link>
            <Button
              type="submit"
              className="button"
              text="Checkout"
            />
          </div>
        </>)
        : null}
    </CartWrapper>
  );
};

export default Cart;
