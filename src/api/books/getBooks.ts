import instance from '..';

import config from '../../config';
import { BooksState } from '../../store/booksSlice'

interface Options {
  currentPage: number,
  genres: number[]
}

const getBooks = async (options: Options) => {  
  const response = await instance.post<BooksState>("/books", {
    currentPage: options.currentPage,
    pagination: config.pagination,
    currentGenres: options.genres
  }) 
  
  return response.data;
}

export default getBooks;