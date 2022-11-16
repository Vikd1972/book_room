import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import SortByWrapper from './SortBy.styles';

export const SortBy: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const [activeItem, setActiveItem] = useState<number>();
  const sortTypes = [
    'Price',
    'Name',
    'Author name',
    'Rating',
    'Date of ussue',
  ];

  const onSortingBy = (name: string, index: number) => {
    setActiveItem(index);
    if (url.searchParams.has('sort')) {
      url.searchParams.set('sort', name);
    } else {
      url.searchParams.append('sort', name);
    }
    dispatch(setQueryString(url.search));
    navigate(url.search);
  };

  return (
    <SortByWrapper>
      {sortTypes.map((sort, index) => (
        <div key={index}>
          <p
            id={sort.replace(/[^a-zA-Z]/g, '')}
            onClick={() => onSortingBy(sort, index)}
            className={`sorting ${activeItem === index && 'active'}`}
          >{sort}
          </p>
        </div>
      ))}
    </SortByWrapper >
  );
};

export default SortBy;
