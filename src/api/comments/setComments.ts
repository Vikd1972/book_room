/* eslint-disable no-console */
import instance from '..';
import type { ICommentType } from '../../store/booksSlice';

interface IRatingParams {
  comments: string;
  bookId: number;
}

const setComments = async (options: IRatingParams) => {
  console.log(options);

  const response = await instance.post<{ commentsOfBook: ICommentType[] }>('/comments', options);

  return response.data.commentsOfBook;
};

export default setComments;
