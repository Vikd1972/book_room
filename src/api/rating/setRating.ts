/* eslint-disable no-console */
import instance from '..';

interface IRatingParams {
  onRating: number | null;
  bookId: number;
}

const setRating = async (options: IRatingParams) => {
  const response = await instance.post<{ averageRatingBook: number }>('/rating', options);

  return response.data.averageRatingBook;
};

export default setRating;
