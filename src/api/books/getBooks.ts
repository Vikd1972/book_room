import type { AxiosResponse } from 'axios';
import instance from '..';

import type { IBooksState } from '../../store/booksSlice';

const getBooks = async (queryString: string): Promise<AxiosResponse<IBooksState>> => {
  const response = await instance.get(
    `/books/${queryString}`,
  );

  return response;
};

export default getBooks;
