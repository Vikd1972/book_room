import React from 'react';
import { useAppDispatch } from '../../../store/hooks';

import quantityChange from '../../../api/cart/quantityChange'
import deleteBookInCart from '../../../api/cart/deleteBookInCart'
import { addCart } from '../../../store/usersSlice'

import QuantityCangeWrapper from './QuantityCange.styles';

interface Props {
  count: number
  id: number
  userId: number
}

export const QuantityCange: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch()

  const onQuantityReduction = async () => {
    if (props.count > 1) {
      const options = {
        id: props.id,
        count: props.count - 1,
        userId: props.userId
      }
      const cart = await quantityChange(options)
      dispatch(addCart(cart));
    }
  }

  const onQuantityAddition = async () => {
    if (props.count < 5) {
      const options = {
        id: props.id,
        count: props.count + 1,
        userId: props.userId
      }
      const cart = await quantityChange(options)
      dispatch(addCart(cart));
    }
  }

  const onDeletingBook = async () => {
    const options = {
      id: props.id,
      userId: props.userId
    }
    const cart = await deleteBookInCart(options)
    dispatch(addCart(cart));
  }

  return (
    <QuantityCangeWrapper>
      <button
        onClick={onQuantityReduction}
        className='through reduction'></button>
      <div id='pages'>{props.count}</div>
      <button
        onClick={onQuantityAddition}
        className='through addition'></button>
      <button
        onClick={onDeletingBook}
        className='through removal'></button>
    </QuantityCangeWrapper>
  )
}

export default QuantityCange