/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);

  const [filterBy, setFilterBy] = useState('');

  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);
  const changePrice = (newPriceValue: number[]) => {
    setPriceValue(newPriceValue);
  };

  const sort = searchParams.get('sort') || '...';

  const chooseByPrice = document.getElementById('choose-by-price');

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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClickOutside = ({ target }: MouseEvent): void => {
    if (ref.current && !ref.current?.contains(target as Node)) {
      setFilterBy('');
    }
  };

  return (
    <СatalogFilterWrapper
      genre={filterBy === 'genres'}
      price={filterBy === 'price'}
      sort={filterBy === 'sort'}
      ref={ref}
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
