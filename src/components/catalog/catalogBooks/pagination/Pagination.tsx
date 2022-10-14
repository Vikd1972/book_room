import React from 'react';

import PaginationWrapper from './Pagination.styles';
import config from '../../../../config'

interface Options {
  quantityBooks: number,
  skip: number,
}

export const Pagination: React.FC<Options> = (props) => {
  const quantityPages = Math.ceil(props.quantityBooks / config.pagination);
  const activePage = (props.skip + config.pagination) / config.pagination;

  const pages = document.querySelector('pages')

  return (
    <PaginationWrapper>
      <div className='through left'></div>
      <div className='pages'></div>
      <div className='through right'></div>
    </PaginationWrapper>
  )
}

export default Pagination