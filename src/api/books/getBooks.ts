import instance from '..';

import config from '../../config';
import type { IBooksState } from '../../store/booksSlice';

interface IOptions {
  currentPage: number;
  queryString: string;
}

const getBooks = async (options: IOptions) => {
  const response = await instance.post<IBooksState>(`/books/${options.queryString}`, {
    currentPage: options.currentPage,
    pagination: config.pagination,
  });

  return response.data;
};

export default getBooks;
