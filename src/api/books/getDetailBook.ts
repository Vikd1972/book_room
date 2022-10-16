import instance from '..';

const getDetailBooks = async (id: number) => {
  const response = await instance.post("/books/detail", {
    id: id,
  })
  
  return response.data;
}

export default getDetailBooks;