import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { Link } from "react-router-dom";
import { loadQueryString } from '../../../../../store/booksSlice';

import PaginationWrapper from './Pagination.styles';
export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const serviceInfo = useAppSelector(state => state.books.serviceInfo);
  const queryString = useAppSelector(state => state.books.queryString)
  const url = new URL(window.location.href)

  const prevPage = async () => {
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (serviceInfo.prevPage).toString())
    } else {
      url.searchParams.append('page', (serviceInfo.prevPage).toString())
    }
    console.log(url.search);
    dispatch(loadQueryString(url.search));
  }

  const nextPage = () => {
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (serviceInfo.nextPage).toString())
    } else {
      url.searchParams.append('page', (serviceInfo.nextPage).toString())
    }
    console.log(url.search);
    dispatch(loadQueryString(url.search));
  }

  const selectPage = (pageId: number) => {
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (pageId).toString())
    } else {
      url.searchParams.append('page', (pageId).toString())
    }
    console.log(url.search);
    dispatch(loadQueryString(url.search));
  }

  let pages: { id: number, to: string, className: string }[] = [];
  for (let i = 0; i < serviceInfo.quantityPages; i++) {
    url.searchParams.set('page', (i + 1).toString())
    pages[i] = {
      id: i,
      to: `/${url.search}`,
      className: `page ${(i + 1) === serviceInfo.activePage && 'active'}`
    }
  }

  return (
    <PaginationWrapper>
      <Link
        className='through left'
        onClick={prevPage}
        to={`/${queryString}`}>
      </Link>
      <div className='pages'>
        {pages.map(page => (
          <div key={page.id}>
            <Link
              onClick={() => selectPage(page.id + 1)}
              to={page.to}>
              <div className={page.className}></div>
            </Link>
          </div>
        ))}
      </div>
      <Link
        className='through right'
        onClick={nextPage}
        to={`/${queryString}`}>
      </Link>

    </PaginationWrapper>
  )
}

export default Pagination