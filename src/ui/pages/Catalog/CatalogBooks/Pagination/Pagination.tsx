/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
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
  const serviceInfo = useAppSelector((state) => state.books.serviceInfo);
  const [pages, setPages] = useState<IPage[]>([]);

  const changePage = (pageNumber: number) => {
    if (serviceInfo.activePage === pageNumber) {
      return;
    }
    searchParams.set('page', (pageNumber).toString());
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const newPages: IPage[] = [];
    for (let i = 0; i < serviceInfo.quantityPages; i++) {
      newPages[i] = {
        id: i,
        className: `page ${(i + 1) === serviceInfo.activePage && 'active'}`,
      };
    }
    setPages(newPages);

    const currentPage = +(searchParams.get('page') || '');
    if (currentPage > serviceInfo.quantityPages) {
      searchParams.set('page', (serviceInfo.quantityPages).toString());
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    serviceInfo.quantityPages,
    serviceInfo.activePage,
  ]);

  return (
    <PaginationWrapper>
      <div
        className="pagination"
        onClick={() => changePage(serviceInfo.prevPage)}
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
        onClick={() => changePage(serviceInfo.nextPage)}
      >
        <img src={right} alt="right" />
      </div>

    </PaginationWrapper>
  );
};

export default Pagination;
