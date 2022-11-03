import instance from '..';
import type { IRatingType } from '../../store/booksSlice';

interface IRatingParams {
  item: number;
  bookId: number;
}

const setRating = async (options: IRatingParams) => {
  const response = await instance.post<{ ratingBook: number }>('/rating', options);

  return response.data.ratingBook;
};

export default setRating;
