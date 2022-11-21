/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';
import type { ICommentType } from '../../store/booksSlice';

interface ICommentsParams {
  comment: string;
  bookId: number;
}

type ResponseType = {
  commentsOfBook: ICommentType[];
};

const setComments = async (options: ICommentsParams): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.post('/comments', options);

  return response.data.commentsOfBook;
};

export default setComments;
