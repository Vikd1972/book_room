import instance from '..';

import { BookType } from '../../store/booksSlice'

const getDetailBooks = async (id: number) => {
  const response = await instance.post("/books/detail", {
    id: id,
  })
  
  return response.data.book as BookType;
}

export default getDetailBooks;