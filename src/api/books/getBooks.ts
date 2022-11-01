import instance from '..';

import config from '../../config';
import type { IBooksState } from '../../store/booksSlice';

interface IOptions {
  currentPage: number;
}

const getBooks = async (options: IOptions) => {
  const response = await instance.post<IBooksState>('/books', {
    currentPage: options.currentPage,
    pagination: config.pagination,
  });

  return response.data;
};

export default getBooks;
