import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getFavoritesBooks = async (favorites: number[]) => {
  const response = await instance.put<{ books: IBookType[] }>('/favorites', { favorites });

  return response.data.books;
};

export default getFavoritesBooks;
