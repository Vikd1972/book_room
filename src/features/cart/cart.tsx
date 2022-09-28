import React from 'react';
import { useAppSelector } from '../../Store/hooks';

import Basket from './cart.styled';

export const Cart: React.FC = () => {
  const isLogged = useAppSelector(state => state.books.isLogged) 

  return isLogged ? (
    <Basket>
      <div className='cart'>
        Cart
      </div>
    </Basket>
  ) : null;
}

export default Cart
