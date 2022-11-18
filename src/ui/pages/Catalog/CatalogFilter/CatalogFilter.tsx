/* eslint-disable no-console */
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const [searchParams] = useSearchParams();
  const ref = useRef<HTMLDivElement>(null);

  const [filterBy, setFilterBy] = useState('');
  const [priceValue, setPriceValue] = useState<number[]>([0, 100]);

  const sort = searchParams.get('sort') || '...';

  const changePrice = (newPriceValue: number[]) => {
    setPriceValue(newPriceValue);
  };

  const selectBy = (type: string) => {
    setFilterBy(type);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
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
        <div className="filter-wrapper">
          <div
            onClick={() => selectBy('genres')}
            className="filter genre"
          >Genre
          </div>
          {filterBy === 'genres' && <ChoiceOfGenre />}
        </div>
        <div className="filter-wrapper">
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
        <div className="filter-wrapper">
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
