/* eslint-disable no-console */
import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import СhoiceByPriceWrapper from './ChoiceByPrice.styles';

interface IOption {
  priceValue: number[];
  changePrice: (newPrice: number[]) => void;
}

export const СhoiceByPrice: React.FC<IOption> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);

  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    props.changePrice(newPrice as number[]);

    // console.log(event);

    // if (Array.isArray(newPrice)) {
    //   if (newPrice[0] > 0 || newPrice[1] < 100) {
    //     if (url.searchParams.has('price')) {
    //       url.searchParams.set('price', newPrice.join(','));
    //     } else {
    //       url.searchParams.append('price', newPrice.join(','));
    //     }
    //   } else {
    //     url.searchParams.delete('price');
    //   }
    // }
    // boolPr = true;
    // dispatch(setQueryString(url.search));
    navigate(url.search);
    const slider = document.getElementById('slider');
    slider?.addEventListener('mouseup', (event) => {
      event.preventDefault();
      console.log(props.priceValue);
    });
  };

  // if (boolPr) setTimeout(() => currentPriceValue(), 2000);

  // const currentPriceValue = () => {
  //   console.log(props.priceValue);
  //   boolPr = false;
  // };

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
