/* eslint-disable react/jsx-closing-tag-location */
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';
import EmptyCart from './EmptyCart/EmptyCart';
import BookInCart from './BookInCart/BookInCart';
import Button from '../../components/Button/Buttons';

import CartWrapper from './Cart.styles';

export const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.users.cart);
  const queryString = useAppSelector((state) => state.books.queryString);

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.count * item.book.paperbackPrice, 0);
  }, [
    cart,
  ]);

  return (
    <CartWrapper>
      {!cart.length && <EmptyCart />}
      {cart.map((item) => (
        <div key={item.id}>
          <BookInCart
            cart={item}
          />
        </div>
      ))}
      {cart.length !== 0
        ? (<>
          <p className="total">Total: <b>{total.toFixed(2)}</b></p>
          <div className="buttons">
            <Link
              className="continue-shopping"
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
