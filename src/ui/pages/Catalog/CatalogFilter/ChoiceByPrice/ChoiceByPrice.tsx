import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

// import { useAppSelector } from '../../../../../store/hooks';
import СhoiceByPriceWrapper from './ChoiceByPrice.styles'

interface SelectByPrice {
  onSelectByPrice: (currentPrice: number[]) => void
}

export const СhoiceByPrice: React.FC<SelectByPrice> = (props) => {
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);

  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    setPriceValue(newPrice as number[]);
    props.onSelectByPrice(priceValue)
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
            {`$ ${priceValue[0]}`}
          </div>
          <div>
            {`$ ${priceValue[1]}`}
          </div>
        </div>
      </div>
    </СhoiceByPriceWrapper >
  );
}

export default СhoiceByPrice
