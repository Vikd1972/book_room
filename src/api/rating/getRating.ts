import instance from '..';
import type { IRatingType } from '../../store/booksSlice';

const getRating = async (bookId: number) => {
  const response = await instance.get<{ myRating: IRatingType }>(
    `/rating/?bookId=${bookId}`,
  );

  return response.data.myRating.rating;
};

export default getRating;
