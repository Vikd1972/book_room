import React from 'react';

import SortByWrapper from './SortBy.styles';

interface ISortByType {
  onSortBy: (name: string) => void;
}

export const SortBy: React.FC<ISortByType> = (props) => {
  const sortЕypes = [
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
    props.onSortBy(name);
  };

  return (
    <SortByWrapper>
      <div className="arrow" />
      {sortЕypes.map((sort) => (
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
