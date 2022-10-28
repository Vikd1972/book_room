import React, { useState } from 'react';

import { useAppDispatch } from '../../../../store/hooks';
import ChoiceOfGenre from '../CatalogFilter/ChoiceOfGenre/ChoiceOfGenre';
import ChoiceByPrice from '../CatalogFilter/ChoiceByPrice/ChoiceByPrice';
import SortBy from '../CatalogFilter/SortBy/SortBy';
import { loadCurrentGenres, loadPrice, loadSort } from '../../../../store/booksSlice';

import СatalogFilterWrapper from './CatalogFilter.styles';

export const CatalogFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isSelectByGenre, setIsSelectByGenre] = useState(false);
  const [genres, setGenres] = useState<string>('');
  const [isSelectByPrice, setIsSelectByPrice] = useState(false);
  const [price, setPrice] = useState<number[]>([]);
  const [isSortingBy, setSortingBy] = useState(false);
  const [sort, setSort] = useState<string>('...');


  const selectByGenre = () => {
    setIsSelectByGenre(!isSelectByGenre);
    if (genres) {
      dispatch(loadCurrentGenres(genres))
    }
    if (!isSelectByGenre) {
      setGenres('')
    }
  }
  const onSelectByGenres = (currentGenres: string) => {
    setGenres(currentGenres)
    // console.log(genres.join(','));
  }

  const selectByPrice = () => {
    setIsSelectByPrice(!isSelectByPrice)

    dispatch(loadPrice(price.join(',')))
  }
  const onSelectByPrice = (currentPrice: number[]) => {
    setPrice(currentPrice)
  }

  const sortBy = () => {
    setSortingBy(!isSortingBy);
    dispatch(loadSort(sort));
  }
  const onSortBy = (sort: string) => {
    setSort(sort)
  }

  return (
    <СatalogFilterWrapper >
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
