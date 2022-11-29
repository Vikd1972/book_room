import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBookType, ICommentType } from '../../store/booksSlice';

type ResponseType = {
  book: IBookType;
  commentsOfBook: ICommentType[];
};

const getDetailBooks = async (bookId: number): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get(
    `/books/detail/?bookId=${bookId}`,
  );

  return response;
};

export default getDetailBooks;
