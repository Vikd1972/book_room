import React, { useState } from 'react';

import ChoiceOfGenre from '../../componentsUI/choiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../../componentsUI/choiceByPrice/ChoiceByPrice';

import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [isSortingBy, setSortingBy] = useState(false);


  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
  }

  const selectByPrice = () => {
    setIsSelectByPrice(!isSelectByPrice)
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
        <div className='filter-wrapper'>
          <div
            onClick={selectByGenre}
            className='filter genre'>Genre
          </div>
          {isSelectByGenre && <ChoiceOfGenre />}
        </div>
        <div className='filter-wrapper'>
          <div
            onClick={selectByPrice}
            className='filter price'>Price
          </div>
          {isSelectByPrice && <ChoiceByPrice />}
        </div>
        <div
          onClick={sortBy}
          className='filter sort'>Sort by...</div>
      </form>
    </СatalogFilterWrapper >
  );
}

export default CatalogFilter
