import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks';

import PaginationWrapper from './Pagination.styles';
import config from '../../../config'

export const Pagination: React.FC = (props) => {
  const serviceInfo = useAppSelector(state => state.books.serviceInfo)
  sessionStorage.setItem('activePage', serviceInfo.activePage + '');

  const pages = document.getElementById('pages')
  if (pages) pages.innerHTML = ''
  for (let i = 1; i <= serviceInfo.quantityPages; i++) {
    const page = document.createElement('a');
    page.classList.add('page');
    page.href = `/${i}`; 
    page.id = i.toString();
    if (i === serviceInfo.activePage) {
      page.classList.add('active');
    }
    pages?.appendChild(page);
  }

  return (
    <PaginationWrapper>
      <a
        href={`/${serviceInfo.prevPage}`}
        className='through left'></a>
      <div id='pages'></div>
      <a
        href={`/${serviceInfo.nextPage}`}
        className='through right'></a>
    </PaginationWrapper>
  )
}

export default Pagination