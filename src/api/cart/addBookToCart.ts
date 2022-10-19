import instance from '..';
import { CartType } from '../../store/usersSlice';

interface OrderParams {
  userId: number,
  bookId: number
}

const addBookToCart = async (option: OrderParams) => {
  const response = await instance.post("/cart/add", option)
    
  return response.data as CartType;
}

export default addBookToCart;