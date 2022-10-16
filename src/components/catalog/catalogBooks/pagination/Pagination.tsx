import React, { useState, useEffect } from 'react';

import PaginationWrapper from './Pagination.styles';
import config from '../../../../config'

interface Options {
  quantityPages: number,
  activePage: number,
  scrolling: (direction: string) => void,
}

export const Pagination: React.FC<Options> = (props) => {

  const pages = document.getElementById('pages')
  if (pages) pages.innerHTML = ''
  for (let i = 1; i <= props.quantityPages; i++) {
    const page = document.createElement('div');
    page.classList.add('page');
    if (i === props.activePage) {
      page.classList.add('active');
    }
    pages?.appendChild(page);
  }

  return (
    <PaginationWrapper>
      <button
        onClick={() => props.scrolling('left')}
        className='through left'></button>
      <div id='pages'></div>
      <button
        onClick={() => props.scrolling('right')}
        className='through right'></button>
    </PaginationWrapper>
  )
}

export default Pagination