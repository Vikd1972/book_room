import instance from '..';

import { BookType } from '../../store/booksSlice'

const getDetailBooks = async (id: number) => {
  const response = await instance.post<{book: BookType}>("/books/detail", {
    id: id,
  })
  
  return response.data.book;
}

export default getDetailBooks;