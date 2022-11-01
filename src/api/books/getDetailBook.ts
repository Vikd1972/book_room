import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getDetailBooks = async (id: number) => {
  const response = await instance.post<{ book: IBookType }>('/books/detail', {
    id,
  });

  return response.data.book;
};

export default getDetailBooks;
