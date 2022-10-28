import React from 'react';
import { useAppSelector } from '../../../../../store/hooks';
import { Link } from "react-router-dom";
import QueryString from '../../../../components/QueryString';

import PaginationWrapper from './Pagination.styles';

export const Pagination: React.FC = () => {
  const serviceInfo = useAppSelector(state => state.books.serviceInfo);
  const queryString = QueryString();
  sessionStorage.setItem('activePage', serviceInfo.activePage + '');

  let pages: { id: number, to: string, className: string }[] = [];

  for (let i = 0; i < serviceInfo.quantityPages; i++) {
    pages[i] = {
      id: i,
      to: `${queryString}page=${i + 1}`,
      className: `page ${(i + 1) === serviceInfo.activePage && 'active'}`
    }
  }

  return (
    <PaginationWrapper>
      <Link
        className='through left'
        to={`${queryString}page=${serviceInfo.prevPage}`}>
      </Link>
      <div className='pages'>
        {pages.map(page => (
          <div key={page.id}>
            <Link
              to={page.to}>
              <div className={page.className}></div>
            </Link>
          </div>
        ))}
      </div>
      <Link
        className='through right'
        to={`${queryString}page=${serviceInfo.nextPage}`}>
      </Link>

    </PaginationWrapper>
  )
}

export default Pagination