/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { getCartThunk } from '../../../store/usersThunks';
import showToast from '../../../validation/showToast';
import EmptyCart from './EmptyCart/EmptyCart';
import BookInCart from './BookInCart/BookInCart';
import Button from '../../components/Button/Buttons';

import CartWrapper from './Cart.styles';

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.users.cart);
  const queryString = useAppSelector((state) => state.books.queryString);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getCartThunk());
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [dispatch]);

  let total = 0;

  for (const item of cart) {
    const pricePerItem = item.count * (item.book.paperbackPrice / 100);
    total += pricePerItem;
  }

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
