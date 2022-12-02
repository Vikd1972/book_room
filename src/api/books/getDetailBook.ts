import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBookType, ICommentType } from '../../store/booksSlice';

type ResponseType = {
  book: IBookType;
  commentsOfBook: ICommentType[];
};

type OptionType = {
  bookId: number;
  userId: number;
};

const getDetailBooks = async (option: OptionType): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get(
    `/books/detail/?bookId=${option.bookId}&userId=${option.userId}`,
  );

  return response;
};

export default getDetailBooks;
