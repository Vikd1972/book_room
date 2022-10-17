import React from 'react';

import Button from '../componentsUI/button/Buttons';

import CartWrapper from './Cart.styles';

export const Cart: React.FC = () => {
  return (
    <CartWrapper>
      <h1>Your cart is empty</h1>
      <p>
        Add items to cart to make a purchase.<br />
        Go to the catalogue no.
      </p>
      <form action="/">
        <Button
          type='submit'
          className='btn'
          text='Go to catalog'
        />
      </form>
    </CartWrapper>
  )
}

export default Cart
