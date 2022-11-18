/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import React from 'react';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

import СhoiceByPriceWrapper from './ChoiceByPrice.styles';

interface IOption {
  priceValue: number[];
  changePrice: (newPrice: number[]) => void;
}

export const СhoiceByPrice: React.FC<IOption> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    props.changePrice(newPrice as number[]);
  };

  const changeQueryStringByPrice = () => {
    props.priceValue[0] === 0 && props.priceValue[1] === 100
      ? searchParams.delete('price')
      : searchParams.set('price', props.priceValue.join(','));

    setSearchParams(searchParams);
  };

  return (
    <СhoiceByPriceWrapper>
      <div
        id="slader"
        className="slider-container"
        onMouseUp={changeQueryStringByPrice}
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
