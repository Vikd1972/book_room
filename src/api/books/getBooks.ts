import instance from '..';

import config from '../../config';
import { BooksState } from '../../store/booksSlice'

const getBooks = async (currentPage: number) => {
  const response = await instance.post("/books", {
    currentPage: currentPage,
    pagination: config.pagination
  }) 
  
  return response.data as BooksState;
}

export default getBooks;