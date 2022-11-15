import instance from '..';

import type { IBookType } from '../../store/booksSlice';

interface IOrderParams {
  bookId: number;
}

const addToFavorites = async (option: IOrderParams) => {
  const response = await instance.post<{ myFavorites: IBookType[] }>('/favorites', option);

  return response.data.myFavorites;
};

export default addToFavorites;
