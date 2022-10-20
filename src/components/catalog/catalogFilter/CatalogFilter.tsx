import React, { useState } from 'react';
import СatalogFilterWrapper from './CatalogFilter.styles';
import Slider from '@mui/material/Slider';
import ChoiceOfGenre from '../../componentsUI/choiceOfGenre/ChoiceOfGenre';



export const CatalogFilter: React.FC = () => {
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [isSortingBy, setSortingBy] = useState(false);
  const [priceValue, setPriceValue] = useState([0, 300]);


  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
  }

  const selectByPrice = () => {
    // setIsSelectByPrice(!isSelectByPrice);
  }
  const onSelectByPrice = (event: Event, newPrice: number | number[]) => {
    // setPriceValue(newPrice as number[]);
    // console.log(newPrice);
  }

  const sortBy = () => {
    setSortingBy(!isSortingBy)
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
        <div className='genre-wrapper'>
          <div
            onClick={selectByGenre}
            className='filter genre'>Genre
          </div>
          {isSelectByGenre && <ChoiceOfGenre />}
        </div>
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
