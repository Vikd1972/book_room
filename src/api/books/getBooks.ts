import instance from '..';

import config from '../../config';
import { BooksState } from '../../store/booksSlice'

interface Options {
  currentPage: number,
  genres: string[]
}

const getBooks = async (options: Options) => {
  const response = await instance.post("/books", {
    currentPage: options.currentPage,
    pagination: config.pagination,
    genres: options.genres
  }) 
  
  return response.data as BooksState;
}

export default getBooks;