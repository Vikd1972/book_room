import instance from '..';

import type { IBookType } from '../../store/booksSlice';

const getRecommendationsBooks = async () => {
  const response = await instance.get<{ books: IBookType[] }>('/books/random');

  return response.data.books;
};

export default getRecommendationsBooks;
