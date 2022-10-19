import instance from '..';

import { BookType } from '../../store/booksSlice';

import config from '../../config';

const getRecommendationsBooks = async () => {
  const response = await instance.get("/books/")

  return response.data.books as BookType[];
}

export default getRecommendationsBooks;