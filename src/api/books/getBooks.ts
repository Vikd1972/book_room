import instance from '..';

const getBooks = async (skip: number) => {
  console.log('skip: ' + skip);
  
  const response = await instance.post("/books", { skip })
  
  return response.data.books;
}

export default getBooks;