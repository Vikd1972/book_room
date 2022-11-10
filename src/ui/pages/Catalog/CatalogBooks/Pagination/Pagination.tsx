import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import left from '../../../../assets/picture/arrow_left.png';
import right from '../../../../assets/picture/arrow_right.png';

import PaginationWrapper from './Pagination.styles';

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const serviceInfo = useAppSelector((state) => state.books.serviceInfo);
  const queryString = useAppSelector((state) => state.books.queryString);
  const url = new URL(window.location.href);

  const prevPage = () => {
    if (serviceInfo.activePage === serviceInfo.prevPage) {
      return;
    }
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (serviceInfo.prevPage).toString());
    } else {
      url.searchParams.append('page', (serviceInfo.prevPage).toString());
    }
    dispatch(setQueryString(url.search));
  };

  const nextPage = () => {
    if (serviceInfo.activePage === serviceInfo.nextPage) {
      return;
    }
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (serviceInfo.nextPage).toString());
    } else {
      url.searchParams.append('page', (serviceInfo.nextPage).toString());
    }
    dispatch(setQueryString(url.search));
  };

  const selectPage = (pageId: number) => {
    if (serviceInfo.activePage === pageId) {
      return;
    }
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (pageId).toString());
    } else {
      url.searchParams.append('page', (pageId).toString());
    }
    dispatch(setQueryString(url.search));
  };

  const pages: {
    id: number;
    to: string;
    className: string;
  }[] = [];

  for (let i = 0; i < serviceInfo.quantityPages; i++) {
    url.searchParams.set('page', (i + 1).toString());
    pages[i] = {
      id: i,
      to: `/${url.search}`,
      className: `page ${(i + 1) === serviceInfo.activePage && 'active'}`,
    };
  }

  return (
    <PaginationWrapper>
      <Link
        className="pagination"
        onClick={prevPage}
        to={`/${queryString}`}
      >
        <img src={left} alt="left" />
      </Link>
      <div className="pages">
        {pages.map((page) => (
          <div key={page.id}>
            <Link
              onClick={() => selectPage(page.id + 1)}
              to={page.to}
            >
              <div className={page.className} />
            </Link>
          </div>
        ))}
      </div>
      <Link
        className="pagination"
        onClick={nextPage}
        to={`/${queryString}`}
      >
        <img src={right} alt="right" />
      </Link>

    </PaginationWrapper>
  );
};

export default Pagination;
