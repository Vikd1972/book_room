/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setCart } from '../../../store/usersSlice';
import getCart from '../../../api/cart/getCart';
import showToast from '../../../validation/showToast';
import EmptyCart from './EmptyCart/EmptyCart';
import BookInCart from './BookInCart/BookInCart';
import Button from '../../components/Button/Buttons';

import CartWrapper from './Cart.styles';

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const queryString = useAppSelector((state) => state.books.queryString);

  useEffect(() => {
    (async () => {
      try {
        const myCart = await getCart();
        dispatch(setCart(myCart));
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [dispatch]);

  let total = 0;

  for (const item of users.cart) {
    const pricePerItem = item.count * (item.book.paperbackPrice / 100);
    total += pricePerItem;
  }

  return (
    <CartWrapper>
      {!users.cart.length && <EmptyCart />}
      {users.cart.map((cart) => (
        <div key={cart.id}>
          <BookInCart
            cart={cart}
          />
        </div>
      ))}
      {users.cart.length !== 0
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
