/* eslint-disable no-console */
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../../../../store/hooks';
import { loadQueryString } from '../../../../../store/booksSlice';
import СhoiceByPriceWrapper from './ChoiceByPrice.styles';

export const СhoiceByPrice: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);
  const url = new URL(window.location.href);

  const onSelectByPrice = (event: React.SyntheticEvent | Event, newPrice: number | number[]) => {
    setPriceValue(newPrice as number[]);
    console.log(newPrice);
    if (priceValue[0] > 0 || priceValue[1] < 100) {
      if (url.searchParams.has('price')) {
        url.searchParams.set('price', priceValue.join(','));
      } else {
        url.searchParams.append('price', priceValue.join(','));
      }
    } else {
      url.searchParams.delete('price');
    }
    dispatch(loadQueryString(url.search));
    navigate(url.search);
  };

  return (
    <СhoiceByPriceWrapper>
      <div className="arrow" />
      <div className="slider-container">
        <Slider
          className="slider"
          getAriaLabel={() => 'Temperature range'}
          value={priceValue}
          max={100}
          onChangeCommitted={onSelectByPrice}
        />
        <div className="value-price">
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
};

export default СhoiceByPrice;
