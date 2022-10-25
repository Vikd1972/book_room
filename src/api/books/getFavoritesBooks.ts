import instance from '..';

import { BookType } from '../../store/booksSlice';


const getFavoritesBooks = async (favorites: number[]) => {
  const response = await instance.put<{books: BookType[]}>("/books/", {favorites})

  return response.data.books;
}

export default getFavoritesBooks;