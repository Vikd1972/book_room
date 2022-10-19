import React from 'react';

import Button from '../../componentsUI/button/Buttons';

import EmptyCartWrapper from './EmptyCart.styles';

export const EmptyCart: React.FC = () => {
  return (
    <EmptyCartWrapper>
      <h1>Your cart is empty</h1>
      <p>
        Add items to cart to make a purchase.<br />
        Go to the catalogue no.
      </p>
      <form action="/">
        <Button
          type='submit'
          className='button'
          text='Go to catalog'
        />
      </form>
    </EmptyCartWrapper>
  )
}

export default EmptyCart
