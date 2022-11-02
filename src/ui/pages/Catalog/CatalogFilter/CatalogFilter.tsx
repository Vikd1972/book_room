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
  const [sort, setSort] = useState<string>('...');
  const url = new URL(window.location.href);

  const chooseByGenre = document.getElementById('choose-by-genre');

  document.onclick = (e) => {
    if (chooseByGenre) {
      const chapter = e.target as HTMLElement;
      if (!chapter.closest('#choose-by-genre')) {
        setIsSelectByGenre(false);
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
  };

  const sortBy = () => {
    setSortingBy(!isSortingBy);
    if (isSortingBy) {
      if (sort !== '...') {
        if (url.searchParams.has('sort')) {
          url.searchParams.set('sort', sort);
        } else {
          url.searchParams.append('sort', sort);
        }
      } else {
        url.searchParams.delete('sort');
      }
      dispatch(loadQueryString(url.search));
      navigate(url.search);
    }
  };
  const onSortBy = (sort: string) => {
    setSort(sort);
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
        <div className="filter-wrapper">
          <div
            onClick={selectByPrice}
            className="filter price"
          >Price
          </div>
          {isSelectByPrice && <ChoiceByPrice />}
        </div>
        <div className="filter-wrapper">
          <div
            onClick={sortBy}
            className="filter sort"
          >{`Sort by ${sort.split(' ')[0]}`}
          </div>
          {isSortingBy && <SortBy onSortBy={onSortBy} />}
        </div>
      </form>
    </СatalogFilterWrapper >
  );
};

export default CatalogFilter;
