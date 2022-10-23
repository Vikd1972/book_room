import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

import { useAppDispatch } from '../../../store/hooks';
import { loadPrice } from '../../../store/booksSlice';
import СhoiceByPriceWrapper from './ChoiceByPrice.styles'

export const СhoiceByPrice: React.FC = () => {
  const dispatch = useAppDispatch();
  const [priceValue, setPriceValue] = useState([0, 100]);


  const onSelectByPrice = (event: Event | MouseEvent | TouchEvent, newPrice: number | number[]) => {
    // if (event.touchend) {
    // console.log(event.type);
    
  // }
      setPriceValue(newPrice as number[]);
      dispatch(loadPrice(priceValue))      
  }

  return (
    <СhoiceByPriceWrapper>
      <div className='arrow'></div>
      <div className='slider-container'>
        <Slider
          className='slider'
          getAriaLabel={() => 'Temperature range'}
          value={priceValue}
          max={100}
          onChange={onSelectByPrice}
        />
        <div className='value-price'>
          <div>
            {`$ ${priceValue[0].toFixed(2)}`}
          </div>
          <div>
            {`$ ${priceValue[1].toFixed(2)}`}
          </div>
        </div>
      </div>
    </СhoiceByPriceWrapper >
  );
}

export default СhoiceByPrice
