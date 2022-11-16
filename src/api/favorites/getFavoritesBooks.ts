/* eslint-disable no-console */
import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getFavoritesBooks = async (favorites: number[]) => {
  const response = await instance.get<{ books: IBookType[] }>(
    `/favorites/?favorites=${favorites.join(',')}`,
  );

  return response.data.books;
};

export default getFavoritesBooks;
