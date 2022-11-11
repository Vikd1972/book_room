import instance from '..';

import type { IBooksState } from '../../store/booksSlice';

interface IOptions {
  queryString: string;
}

const getBooks = async (options: IOptions) => {
  const response = await instance.get<IBooksState>(`/books/${options.queryString}`);

  return response.data;
};

export default getBooks;
