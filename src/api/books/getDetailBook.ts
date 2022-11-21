import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBookType } from '../../store/booksSlice';

type ResponseType = {
  book: IBookType;
};

const getDetailBooks = async (bookId: number): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get(
    `/books/detail/?bookId=${bookId}`,
  );

  return response;
};

export default getDetailBooks;
