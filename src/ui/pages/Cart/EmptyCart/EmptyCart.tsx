import React from 'react';

import Button from '../../../components/Button/Buttons';
import { useAppSelector } from '../../../../store/hooks';

import book from '../../../assets/picture/books2.png';

import EmptyCartWrapper from './EmptyCart.styles';

export const EmptyCart: React.FC = () => {
  const queryString = useAppSelector((state) => state.books.queryString);

  return (
    <EmptyCartWrapper>
      <div className="container-image">
        <img src={book} alt="book" />
      </div>
      <div className="container-text">
        <h1>Your cart is empty</h1>
        <div>
          <p>Add items to cart to make a purchase.
            Go to the catalogue no.
          </p>
        </div>
        <form action={`/${queryString}`}>
          <Button
            type="submit"
            className="button"
            text="Go to catalog"
          />
        </form>
      </div>
    </EmptyCartWrapper>
  );
};

export default EmptyCart;
