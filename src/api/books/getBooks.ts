/* eslint-disable indent */
/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import QueryString from 'qs';
import instance from '..';

import type { IBooksState } from '../../store/booksSlice';

type MyQueryType = {
  page: string;
  search: string;
  genres: string;
  price: string;
  sort: string;
};

const getBooks = async (myQuery: MyQueryType): Promise<AxiosResponse<IBooksState>> => {
  const response = await instance.get(
    '/books', {
    params: myQuery,
    paramsSerializer: (params) => {
      return QueryString.stringify(params);
    },
  },
  );

  return response;
};

export default getBooks;
