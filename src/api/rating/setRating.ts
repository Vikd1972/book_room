/* eslint-disable max-len */
/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';

interface IRatingParams {
  onRating?: number;
  bookId: number;
}

type ResponseType = {
  averageRatingBook: number;
};

const setRating = async (options: IRatingParams): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.post('/rating', options);

  return response;
};

export default setRating;
