import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAppSelector } from '../../store/hooks';

import Button from '../componentsUI/button/Buttons';
import EmptyCart from './emptyCart/EmptyCart';
import { CartType } from '../../store/usersSlice';
import BookInCart from './bookInCart/BookInCart';

import CartWrapper from './Cart.styles';


export const Cart: React.FC = () => {
  const user = useAppSelector(state => state.users.user)
  const fullCart = useAppSelector(state => state.users.cart)
  const activePage = sessionStorage.getItem('activePage') || '1'

  let total = 0;
  for (let item of fullCart) {
    const currentPrice = item.book.paperbackPrice ?
      item.book.paperbackPrice : item.book.hardcoverPrice;
    const pricePerItem = item.count * (currentPrice / 100)
    total += pricePerItem
  }

  return (
    <CartWrapper>
      {fullCart.length === 0 ? <EmptyCart /> : null}
      {fullCart.map(cart => (
        <div key={cart.id}>
          <BookInCart
            cart={cart}
            userId={user.id}
          />
        </div>
      ))}
      {fullCart.length !== 0 ?
        <>
          <p className='total'>Total: <b>{total.toFixed(2)}</b></p>
          <div className='buttons'>
            <Link
              className="navi"
              to={`/${activePage}`}>
              Continue shopping
            </Link>
            <Button
              type='submit'
              className="button"
              text='Checkout'
            />
          </div>
        </>
        : null}
    </CartWrapper>
  )
}

export default Cart
