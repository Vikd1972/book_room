/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../store/hooks';
import { setQueryString } from '../../../../store/booksSlice';
import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [filterBy, setFilterBy] = useState('');
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);

  const changePrice = (newPriceValue: number[]) => {
    setPriceValue(newPriceValue);
  };

  const url = new URL(window.location.href);
  const sort = url.searchParams.get('sort') || '...';

  const chooseByGenre = document.getElementById('choose-by-genre');
  const chooseByPrice = document.getElementById('choose-by-price');
  const chooseBySort = document.getElementById('choose-by-sort');

  // chooseByPrice?.addEventListener('mouseup', (event) => {
  //   event.preventDefault();
  //   console.log('priceValue');
  // });

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

  const selectBy = (type: string) => {
    setFilterBy(type);
    url.searchParams.delete(type);
    dispatch(setQueryString(url.search));
    navigate(url.search);
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
