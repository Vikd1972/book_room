/* eslint-disable no-console */
import React from 'react';
import { useAppDispatch } from '../../../../../store/hooks';

import quantityChange from '../../../../../api/cart/quantityChange';
import deleteBookInCart from '../../../../../api/cart/deleteBookInCart';
import { getCartThunk } from '../../../../../store/usersThunks';
import { addOrRemoveInCart, changeQuantityInCart } from '../../../../../store/usersSlice';
import type { IBookType } from '../../../../../store/booksSlice';

import reduction from '../../../../assets/picture/minus.png';
import addition from '../../../../assets/picture/plus.png';
import removal from '../../../../assets/picture/removal.png';

import QuantityCangeWrapper from './QuantityCange.styles';

interface IProps {
  count: number;
  cartId: number;
  book: IBookType;
}

export const QuantityCange: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  const onQuantityReduction = async () => {
    try {
      if (props.count > 1) {
        const options = {
          cartId: props.cartId,
          count: props.count - 1,
        };
        await quantityChange(options);
        dispatch(changeQuantityInCart(options));
        // await dispatch(getCartThunk()).unwrap();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onQuantityAddition = async () => {
    try {
      if (props.count < 5) {
        const options = {
          cartId: props.cartId,
          count: props.count + 1,
        };
        await quantityChange(options);
        dispatch(changeQuantityInCart(options));
        // await dispatch(getCartThunk()).unwrap();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDeletingBook = async () => {
    try {
      const options = {
        cartId: props.cartId,
      };
      await deleteBookInCart(options);
      // dispatch(addOrRemoveInCart(props.book));
      await dispatch(getCartThunk()).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <QuantityCangeWrapper>
      <button
        onClick={onQuantityReduction}
        className="quantity-change reduction"
      >
        <img src={reduction} alt="reduction" />
      </button>
      <div className="quantity-books">{props.count}</div>
      <button
        onClick={onQuantityAddition}
        className="quantity-change addition"
      >
        <img src={addition} alt="addition" />
      </button>
      <button
        onClick={onDeletingBook}
        className="quantity-change removal"
      >
        <img src={removal} alt="removal" />
      </button>
    </QuantityCangeWrapper>
  );
};

export default QuantityCange;
