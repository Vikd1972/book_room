import React from 'react';
import СatalogFilterWrapper from './CatalogFilter.styled';

export const CatalogFilter: React.FC = () => {
  return (
    <СatalogFilterWrapper>
      <div className='name'>Catalog</div>
      <div className='filtering'>
        <div className='filter genre'>Genre</div>
        <div className='filter price'>Price</div>
        <div className='filter sort'>Sort by...</div>
      </div>
    </СatalogFilterWrapper >
  );
}

export default CatalogFilter