/* eslint-disable no-console */
import instance from '..';
import type { ICommentType } from '../../store/booksSlice';

const getComments = async (bookId: number) => {
  const response = await instance.post<{ commentsOfBook: ICommentType[] }>('/comments/get', {
    bookId,
  });

  return response.data.commentsOfBook;
};

export default getComments;
