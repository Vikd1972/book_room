import instance from '..';

interface OrderParams {
  userId: number,
  bookId: number
}

const addBookToCart = async (option: OrderParams) => {
  const response = await instance.post("/cart/add", {
    userId: option.userId,
    bookId: option.bookId,
  })
    
  return response.data;
}

export default addBookToCart;