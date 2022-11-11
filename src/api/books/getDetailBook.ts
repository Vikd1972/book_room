import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getDetailBooks = async (bookId: number) => {
  const response = await instance.post<{ book: IBookType }>('/books/detail', {
    bookId,
  });

  return response.data.book;
};

export default getDetailBooks;
