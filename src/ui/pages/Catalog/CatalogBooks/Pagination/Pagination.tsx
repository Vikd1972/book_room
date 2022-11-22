/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../../../store/hooks';

import left from '../../../../assets/picture/arrow_left.png';
import right from '../../../../assets/picture/arrow_right.png';

import PaginationWrapper from './Pagination.styles';

interface IPage {
  id: number;
  className: string;
}

export const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const books = useAppSelector((state) => state.books);

  const changePage = (pageNumber: number) => {
    if (books.serviceInfo.activePage === pageNumber) {
      return;
    }
    searchParams.set('page', (pageNumber).toString());
    setSearchParams(searchParams);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const pages: IPage[] = [];

  useEffect(() => {
    for (let i = 0; i < books.serviceInfo.quantityPages; i++) {
      pages[i] = {
        id: i,
        className: `page ${(i + 1) === books.serviceInfo.activePage && 'active'}`,
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    pages,
  ]);

  return (
    <PaginationWrapper>
      <div
        className="pagination"
        onClick={() => changePage(books.serviceInfo.prevPage)}
      >
        <img src={left} alt="left" />
      </div>
      <div className="pages">
        {pages.map((page) => (
          <div key={page.id}>
            <div
              onClick={() => changePage(page.id + 1)}
            >
              <div className={page.className} />
            </div>
          </div>
        ))}
      </div>
      <div
        className="pagination"
        onClick={() => changePage(books.serviceInfo.nextPage)}
      >
        <img src={right} alt="right" />
      </div>

    </PaginationWrapper>
  );
};

export default Pagination;
