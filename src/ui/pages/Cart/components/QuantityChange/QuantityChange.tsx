import React from 'react';
import { useAppDispatch } from '../../../../../store/hooks';

import quantityChange from '../../../../../api/cart/quantityChange';
import deleteBookInCart from '../../../../../api/cart/deleteBookInCart';
import { addCart } from '../../../../../store/usersSlice';

import QuantityCangeWrapper from './QuantityCange.styles';

interface IProps {
  count: number;
  id: number;
  userId: number;
}

export const QuantityCange: React.FC<IProps> = (props) => {
  const dispatch = useAppDispatch();

  const onQuantityReduction = async () => {
    try {
      if (props.count > 1) {
        const options = {
          id: props.id,
          count: props.count - 1,
          userId: props.userId,
        };
        const cart = await quantityChange(options);
        dispatch(addCart(cart));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const onQuantityAddition = async () => {
    try {
      if (props.count < 5) {
        const options = {
          id: props.id,
          count: props.count + 1,
          userId: props.userId,
        };
        const cart = await quantityChange(options);
        dispatch(addCart(cart));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const onDeletingBook = async () => {
    try {
      const options = {
        id: props.id,
        userId: props.userId,
      };
      const cart = await deleteBookInCart(options);
      dispatch(addCart(cart));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <QuantityCangeWrapper>
      <button
        onClick={onQuantityReduction}
        className="through reduction"
      />
      <div id="pages">{props.count}</div>
      <button
        onClick={onQuantityAddition}
        className="through addition"
      />
      <button
        onClick={onDeletingBook}
        className="through removal"
      />
    </QuantityCangeWrapper>
  );
};

export default QuantityCange;
