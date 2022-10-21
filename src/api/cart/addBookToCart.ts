import instance from '..';
import { CartType } from '../../store/usersSlice';

interface OrderParams {
  userId: number,
  bookId: number
}

const addBookToCart = async (option: OrderParams) => {
  const response = await instance.post<{userCart: CartType[]}>("/cart/add", option)
    
  return response.data.userCart;
}

export default addBookToCart;