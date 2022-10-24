import React, { useState } from 'react';
import { useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import ChoiceOfGenre from '../../componentsUI/choiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../../componentsUI/choiceByPrice/ChoiceByPrice';
import SortBy from '../../componentsUI/sortBy/SortBy';
import { loadCurrentGenres, loadPrice, loadSort } from '../../../store/booksSlice';

import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [genres, setGenres] = useState<number[]>([]);
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [price, setPrice] = useState<number[]>([0, 100]);
  const [isSortingBy, setSortingBy] = useState(false);
  const [sort, setSort] = useState<string>('...');


  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
    if (genres) {
      dispatch(loadCurrentGenres(genres))
    }
    if (!isSelectByGenre) {
      setGenres([])
    }
  }
  const onSelectByGenres = (currentGenres: number[]) => {
    setGenres(currentGenres)
  }

  const selectByPrice = () => {
    setIsSelectByPrice(!isSelectByPrice)
    dispatch(loadPrice(price))
  }
  const onSelectByPrice = (currentPrice: number[]) => {
    setPrice(currentPrice)
  }

  const sortBy = () => {
    setSortingBy(!isSortingBy)
    dispatch(loadSort(sort))
  }
  const onSortBy = (sort: string) => {
    setSort(sort)
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
          {isSelectByGenre && <ChoiceOfGenre onSelectByGenres={onSelectByGenres} />}
        </div>
        <div className='filter-wrapper'>
          <div
            onClick={selectByPrice}
            className='filter price'>Price
          </div>
          {isSelectByPrice && <ChoiceByPrice onSelectByPrice={onSelectByPrice} />}
        </div>
        <div className='filter-wrapper'>
          <div
            onClick={sortBy}
            className='filter sort'>{`Price by ${sort.split(' ')[0]}`}
          </div>
          {isSortingBy && <SortBy onSortBy={onSortBy} />}
        </div>
      </form>
    </СatalogFilterWrapper >
  );
}

export default CatalogFilter
