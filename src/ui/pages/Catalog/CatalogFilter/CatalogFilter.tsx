/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../store/hooks';
import { loadQueryString } from '../../../../store/booksSlice';
import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [isSortingBy, setSortingBy] = useState(false);
  const url = new URL(window.location.href);
  const sort = url.searchParams.get('sort') || '...';

  const chooseByGenre = document.getElementById('choose-by-genre');
  const chooseByPrice = document.getElementById('choose-by-price');
  const chooseBySort = document.getElementById('choose-by-sort');

  document.onclick = (e) => {
    if (chooseByGenre && chooseByPrice && chooseBySort) {
      const choose = e.target as HTMLElement;
      if (!choose.closest('#choose-by-genre') &&
        !choose.closest('#choose-by-price') &&
        !choose.closest('#choose-by-sort')) {
        setIsSelectByGenre(false);
        setIsSelectByPrice(false);
        setSortingBy(false);
      }
    }
  };

  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
    if (!isSelectByGenre) {
      url.searchParams.delete('genres');
      dispatch(loadQueryString(url.search));
      navigate(url.search);
    }
  };

  const selectByPrice = () => {
    setIsSelectByPrice(!isSelectByPrice);
    if (!isSelectByPrice) {
      url.searchParams.delete('price');
      dispatch(loadQueryString(url.search));
      navigate(url.search);
    }
  };

  const sortBy = () => {
    setSortingBy(!isSortingBy);
    if (!isSortingBy) {
      url.searchParams.delete('sort');
      dispatch(loadQueryString(url.search));
      navigate(url.search);
    }
  };

  return (
    <СatalogFilterWrapper
      genre={isSelectByGenre}
      price={isSelectByPrice}
      sort={isSortingBy}
    >
      <div className="name">Catalog</div>
      <form
        name="selector"
        className="filtering"
      >
        <div
          id="choose-by-genre"
          className="filter-wrapper"
        >
          <div
            onClick={selectByGenre}
            className="filter genre"
          >Genre
          </div>
          {isSelectByGenre && <ChoiceOfGenre />}
        </div>
        <div
          id="choose-by-price"
          className="filter-wrapper"
        >
          <div
            onClick={selectByPrice}
            className="filter price"
          >Price
          </div>
          {isSelectByPrice && <ChoiceByPrice />}
        </div>
        <div
          id="choose-by-sort"
          className="filter-wrapper"
        >
          <div
            onClick={sortBy}
            className="filter sort"
          >{`Sort by ${sort.split(' ')[0]}`}
          </div>
          {isSortingBy && <SortBy />}
        </div>
      </form>
    </СatalogFilterWrapper >
  );
};

export default CatalogFilter;
