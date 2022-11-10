/* eslint-disable no-console */
import instance from '..';
import type { IRatingType } from '../../store/booksSlice';

interface IRatingParams {
  userId: number;
  bookId: number;
}

const getRating = async (options: IRatingParams) => {
  const response = await instance.post<{ myRating: IRatingType }>('/rating/get', options);

  return response.data.myRating;
};

export default getRating;
