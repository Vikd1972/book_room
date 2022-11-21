/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';

import type { ICommentType } from '../../store/booksSlice';

type ResponseType = {
  commentsOfBook: ICommentType[];
};

const getComments = async (bookId: number): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get(
    `/comments/?bookId=${bookId}`,
  );

  return response;
};

export default getComments;
