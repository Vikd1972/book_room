/* eslint-disable no-console */
import React from 'react';
import Slider from '@mui/material/Slider';

import СhoiceByPriceWrapper from './ChoiceByPrice.styles';

interface IOption {
  priceValue: number[];
  changePrice: (newPrice: number[]) => void;
}

export const СhoiceByPrice: React.FC<IOption> = (props) => {
  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    props.changePrice(newPrice as number[]);
  };

  return (
    <СhoiceByPriceWrapper>
      <div
        id="slader"
        className="slider-container"
      >
        <Slider
          className="slider"
          value={props.priceValue}
          max={100}
          onChange={onSelectByPrice}
        />
        <div className="value-price">
          <div>
            {`$ ${props.priceValue[0].toFixed(2)}`}
          </div>
          <div>
            {`$ ${props.priceValue[1].toFixed(2)}`}
          </div>
        </div>
      </div>
    </СhoiceByPriceWrapper >
  );
};

export default СhoiceByPrice;
