/* eslint-disable no-console */
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterBy, setFilterBy] = useState('');
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);

  const changePrice = (newPriceValue: number[]) => {
    setPriceValue(newPriceValue);
  };

  const sort = searchParams.get('sort') || '...';

  const chooseByGenre = document.getElementById('choose-by-genre');
  const chooseByPrice = document.getElementById('choose-by-price');
  const chooseBySort = document.getElementById('choose-by-sort');

  document.onclick = (e) => {
    if (chooseByGenre && chooseByPrice && chooseBySort) {
      const choose = e.target as HTMLElement;
      if (!choose.closest('#choose-by-genre') &&
        !choose.closest('#choose-by-price') &&
        !choose.closest('#choose-by-sort')) {
        setFilterBy('');
      }
    }
  };

  if (chooseByPrice) {
    chooseByPrice.onmouseup = () => {
      if (Array.isArray(priceValue)) {
        if (priceValue[0] === 0 && priceValue[1] === 100) {
          searchParams.delete('price');
          setSearchParams(searchParams);
        } else {
          searchParams.set('price', priceValue.join(','));
          setSearchParams(searchParams);
        }
      }
    };
  }

  const selectBy = (type: string) => {
    setFilterBy(type);
  };

  return (
    <СatalogFilterWrapper
      genre={filterBy === 'genres'}
      price={filterBy === 'price'}
      sort={filterBy === 'sort'}
    >
      <div className="title">Catalog</div>
      <div className="filter-bank">
        <div
          id="choose-by-genre"
          className="filter-wrapper"
        >
          <div
            onClick={() => selectBy('genres')}
            className="filter genre"
          >Genre
          </div>
          {filterBy === 'genres' && <ChoiceOfGenre />}
        </div>
        <div
          id="choose-by-price"
          className="filter-wrapper"
        >
          <div
            onClick={() => selectBy('price')}
            className="filter price"
          >Price
          </div>
          {filterBy === 'price' && (<ChoiceByPrice
            changePrice={changePrice}
            priceValue={priceValue}
          />)}
        </div>
        <div
          id="choose-by-sort"
          className="filter-wrapper"
        >
          <div
            onClick={() => selectBy('sort')}
            className="filter sort"
          >{`Sort by ${sort.split(' ')[0]}`}
          </div>
          {filterBy === 'sort' && <SortBy />}
        </div>
      </div>
    </СatalogFilterWrapper >
  );
};

export default CatalogFilter;
