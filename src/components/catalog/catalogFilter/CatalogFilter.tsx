import React, { useState } from 'react';
import СatalogFilterWrapper from './CatalogFilter.styled';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
  return `${value}`;
}

export const CatalogFilter: React.FC = () => {
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [isSortingBy, setSortingBy] = useState(false);
  const [priceValue, setPriceValue] = useState([0, 300]);


  const selectByGenre = () => {
    setIsSelectByPrice(false);
    setIsSelectByGenre(true);
  }
  const onSelectByGenre = () => {
    const genre = document.querySelector('input[name="genre"]:checked') as HTMLInputElement;
    console.log(genre.value);
    setIsSelectByGenre(false);
  }

  const selectByPrice = () => {
    setIsSelectByGenre(false);
    setIsSelectByPrice(true);
  }

  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    setPriceValue(newPrice as number[]);
    console.log(newPrice);
  }

  const sortBy = () => {
    setSortingBy(true)
  }

  return (
    <СatalogFilterWrapper
      genre={isSelectByGenre}
      price={isSelectByPrice}
      sort={isSortingBy}>
      <div className='name'>Catalog</div>
      <form
        name='selector'
        className='filtering'>
        <div
          onClick={selectByGenre}
          className='filter genre'>Genre
          {isSelectByGenre ? (
            <>
              <div className='arrow'></div>
              <div className='genre__btn'>
                <label className="custom-radio">
                  <input type="radio" name="genre" value="fiction" onChange={onSelectByGenre} />
                  <span>Fiction</span>
                </label><br />
                <label className="custom-radio">
                  <input type="radio" name="genre" value="non_fiction" onChange={onSelectByGenre} />
                  <span>Noh-fiction</span>
                </label><br />
              </div>
            </>
          ) : null}</div>
        <div
          onClick={selectByPrice}
          className='filter price'>Price
          {isSelectByPrice ? (
            <>
            <div className='arrow'></div>
              <Slider
                className='price-box'
                getAriaLabel={() => 'Temperature range'}
                max={500}
                value={priceValue}
                onChange={onSelectByPrice}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              />
            </>
          ) : null}</div>
        <div className='filter sort'>Sort by...</div>
      </form>
    </СatalogFilterWrapper >
  );
}

export default CatalogFilter