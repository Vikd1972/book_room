import instance from '..';

import { BookType } from '../../store/booksSlice';

const getRecommendationsBooks = async () => {
  const response = await instance.get<{books: BookType[]}>("/books/")

  return response.data.books;
}

export default getRecommendationsBooks;