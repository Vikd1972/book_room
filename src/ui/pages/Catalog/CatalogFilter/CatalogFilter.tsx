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
  const [genres, setGenres] = useState<string>('');
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [isSortingBy, setSortingBy] = useState(false);
  const [sort, setSort] = useState<string>('...');
  const url = new URL(window.location.href);

  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
    if (isSelectByGenre) {
      if (genres.length) {
        if (url.searchParams.has('genres')) {
          url.searchParams.set('genres', genres);
        } else {
          url.searchParams.append('genres', genres);
        }
      } else {
        url.searchParams.delete('genres');
      }
      dispatch(loadQueryString(url.search));
      setGenres('');
      navigate(url.search);
    }
  };
  const onSelectByGenres = (genres: string) => {
    setGenres(genres);
  };

  const selectByPrice = () => {
    setIsSelectByPrice(!isSelectByPrice);
    if (isSelectByPrice) {
      if (price[0] > 0 || price[1] < 100) {
        if (url.searchParams.has('price')) {
          url.searchParams.set('price', price.join(','));
        } else {
          url.searchParams.append('price', price.join(','));
        }
      } else {
        url.searchParams.delete('price');
      }
      dispatch(loadQueryString(url.search));
      setPrice([0, 100]);
      navigate(url.search);
    }
  };
  const onSelectByPrice = (price: number[]) => {
    setPrice(price);
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
        <div className="filter-wrapper">
          <div
            onClick={selectByGenre}
            className="filter genre"
          >Genre
          </div>
          {isSelectByGenre && <ChoiceOfGenre onSelectByGenres={onSelectByGenres} />}
        </div>
        <div className="filter-wrapper">
          <div
            onClick={selectByPrice}
            className="filter price"
          >Price
          </div>
          {isSelectByPrice && <ChoiceByPrice onSelectByPrice={onSelectByPrice} />}
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
