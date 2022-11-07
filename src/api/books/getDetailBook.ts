import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getDetailBooks = async (id: number) => {
  const response = await instance.post<{ book: IBookType; myRating: number }>('/books/detail', {
    id,
  });

  return response.data;
};

export default getDetailBooks;
