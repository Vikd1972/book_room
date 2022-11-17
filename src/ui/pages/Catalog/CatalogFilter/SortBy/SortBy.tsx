import React from 'react';

import { useSearchParams } from 'react-router-dom';

import SortByWrapper from './SortBy.styles';

export const SortBy: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortTypes = [
    'Price',
    'Name',
    'Author name',
    'Rating',
    'Date of ussue',
  ];

  const activeItem = sortTypes.indexOf(searchParams.get('sort') || '');

  const onSortingBy = (name: string) => {
    searchParams.set('sort', name);
    setSearchParams(searchParams);
  };

  return (
    <SortByWrapper>
      {sortTypes.map((sort, index) => (
        <div key={index}>
          <p
            onClick={() => onSortingBy(sort)}
            className={`sorting ${activeItem === index && 'active'}`}
          >{sort}
          </p>
        </div>
      ))}
    </SortByWrapper >
  );
};

export default SortBy;
