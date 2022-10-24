import instance from '..';

import config from '../../config';
import { BooksState, QueryOptionsType } from '../../store/booksSlice'

interface Options {
  currentPage: number,
  queryOptions: QueryOptionsType
}

const getBooks = async (options: Options) => {  
  console.log(options);
  
  const response = await instance.post<BooksState>("/books", {
    currentPage: options.currentPage,
    queryOptions: options.queryOptions,
    pagination: config.pagination,
  }) 
  
  return response.data;
}

export default getBooks;