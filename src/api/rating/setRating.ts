/* eslint-disable no-console */
import instance from '..';
import type { IRatingType } from '../../store/booksSlice';

interface IRatingParams {
  onRating: number | null;
  bookId: number;
}

const setRating = async (options: IRatingParams) => {
  const response = await instance.post<{ myRating: IRatingType }>('/rating', options);

  return response.data.myRating;
};

export default setRating;
