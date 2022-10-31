import instance from '..';

import config from '../../config';
import { BooksState } from '../../store/booksSlice'

interface Options {
  currentPage: number,
}

const getBooks = async (options: Options) => {

  const response = await instance.post<BooksState>("/books", {
    currentPage: options.currentPage,
    pagination: config.pagination,
  })

  return response.data;
}

export default getBooks;