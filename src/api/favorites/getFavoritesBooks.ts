/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBookType } from '../../store/booksSlice';

type ResponseType = {
  books: IBookType[];
};

const getFavoritesBooks = async (favorites: number[]): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get(
    `/favorites/?favorites=${favorites.join(',')}`,
  );

  return response;
};

export default getFavoritesBooks;
