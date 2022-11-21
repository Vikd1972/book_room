/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBookType } from '../../store/booksSlice';

type ResponseType = {
  books: IBookType[];
};

const getRecommendationsBooks = async (): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get('/books/random');

  return response;
};

export default getRecommendationsBooks;
