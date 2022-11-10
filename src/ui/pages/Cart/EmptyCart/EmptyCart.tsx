import React from 'react';

import Button from '../../../components/Button/Buttons';
import { useAppSelector } from '../../../../store/hooks';

import EmptyCartWrapper from './EmptyCart.styles';

export const EmptyCart: React.FC = () => {
  const queryString = useAppSelector((state) => state.books.queryString);

  return (
    <EmptyCartWrapper>
      <h1>Your cart is empty</h1>
      <p>Add items to cart to make a purchase.</p>
      <p>Go to the catalogue no.</p>
      <form action={`/${queryString}`}>
        <Button
          type="submit"
          className="button"
          text="Go to catalog"
        />
      </form>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
