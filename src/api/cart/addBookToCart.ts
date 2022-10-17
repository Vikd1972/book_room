import instance from '..';

interface OrderParams {
  userId: number,
  bookId: number
}

const addBookToCart = async (option: OrderParams) => {
  const response = await instance.post("/cart", {
    userId: option.userId,
    bookId: option.bookId,
  })
  
  console.log(response.data);
  
  return response.data;
}

export default addBookToCart;