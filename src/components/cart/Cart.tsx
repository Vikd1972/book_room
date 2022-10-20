import React from 'react';

import { useAppSelector } from '../../store/hooks';

import Button from '../componentsUI/button/Buttons';
import EmptyCart from './emptyCart/EmptyCart';
import { CartType } from '../../store/usersSlice';
import BookInCart from './bookInCart/BookInCart';

import CartWrapper from './Cart.styles';


export const Cart: React.FC = () => {
  const user = useAppSelector(state => state.users.user)
  const fullCart = useAppSelector(state => state.users.cart) 
  console.log(fullCart);
  

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
    </CartWrapper>
  )
}

export default Cart
