import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import SortByWrapper from './SortBy.styles';

export const SortBy: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const url = new URL(window.location.href);
  const sortTypes = [
    { id: 1, name: 'Price' },
    { id: 2, name: 'Name' },
    { id: 3, name: 'Author name' },
    { id: 4, name: 'Rating' },
    { id: 5, name: 'Date of ussue' },
  ];

  const onSortingBy = (name: string) => {
    const othersItems = document.querySelectorAll('.sorting');
    for (const item of othersItems) {
      item?.classList.remove('active');
    }
    const activeItem = document.querySelector(`#${name.replace(/[^a-zA-Z]/g, '')}`);
    activeItem?.classList.add('active');
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
      <div className="arrow" />
      {sortTypes.map((sort) => (
        <div key={sort.id}>
          <p
            id={sort.name.replace(/[^a-zA-Z]/g, '')}
            onClick={() => onSortingBy(sort.name)}
            className="sorting"
          >{sort.name}
          </p>
        </div>
      ))}
    </SortByWrapper >
  );
};

export default SortBy;
