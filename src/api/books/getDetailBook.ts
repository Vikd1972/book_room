import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getDetailBooks = async (bookId: number) => {
  const response = await instance.get<{ book: IBookType }>(
    `/books/detail/?bookId=${bookId}`,
  );

  return response.data.book;
};

export default getDetailBooks;
