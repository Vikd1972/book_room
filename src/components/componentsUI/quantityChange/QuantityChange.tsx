import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';

import QuantityCangeWrapper from './QuantityCange.styles';
import config from '../../../config'
import quantityCgange from '../../../api/cart/quantityCange'
import deleteBookInCart from '../../../api/cart/deleteBookInCart'
interface Props {
  count: number
  id: number
}

export const QuantityCange: React.FC<Props> = (props) => {

  const onQuantityReduction = async () => {
    if (props.count > 1) {
      const options = {
        id: props.id,
        count: props.count - 1
      }
      await quantityCgange(options)
    }
  }

  const onQuantityAddition = async () => {
    if (props.count < 5) {
      const options = {
        id: props.id,
        count: props.count + 1
      }
      await quantityCgange(options)
    }
  }
  const onDeletingBook = async () => {
    await deleteBookInCart(props.id)
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