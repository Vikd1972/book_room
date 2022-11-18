/* eslint-disable no-console */
import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../../../../store/hooks';
import { setQueryString } from '../../../../../store/booksSlice';

import left from '../../../../assets/picture/arrow_left.png';
import right from '../../../../assets/picture/arrow_right.png';

import PaginationWrapper from './Pagination.styles';

export const Pagination: React.FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.books);
  const url = new URL(window.location.href);

  const changePage = (pageNumber: number) => {
    if (books.serviceInfo.activePage === pageNumber) {
      return;
    }
    if (url.searchParams.has('page')) {
      url.searchParams.set('page', (pageNumber).toString());
    } else {
      url.searchParams.append('page', (pageNumber).toString());
    }
    dispatch(setQueryString(url.search));
  };

  const pages: {
    id: number;
    to: string;
    className: string;
  }[] = [];

  useMemo(() => {
    for (let i = 0; i < books.serviceInfo.quantityPages; i++) {
      url.searchParams.set('page', (i + 1).toString());
      pages[i] = {
        id: i,
        to: `/${url.search}`,
        className: `page ${(i + 1) === books.serviceInfo.activePage && 'active'}`,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    books.serviceInfo.activePage,
    books.serviceInfo.quantityPages,
    url.searchParams,
    url.search,
  ]);

  return (
    <PaginationWrapper>
      <Link
        className="pagination"
        onClick={() => changePage(books.serviceInfo.prevPage)}
        to={`/${books.queryString}`}
      >
        <img src={left} alt="left" />
      </Link>
      <div className="pages">
        {pages.map((page) => (
          <div key={page.id}>
            <Link
              onClick={() => changePage(page.id + 1)}
              to={page.to}
            >
              <div className={page.className} />
            </Link>
          </div>
        ))}
      </div>
      <Link
        className="pagination"
        onClick={() => changePage(books.serviceInfo.nextPage)}
        to={`/${books.queryString}`}
      >
        <img src={right} alt="right" />
      </Link>

    </PaginationWrapper>
  );
};

export default Pagination;
