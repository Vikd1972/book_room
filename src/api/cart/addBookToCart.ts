import instance from '..';
import type { ICartType } from '../../store/usersSlice';

interface IOrderParams {
  bookId: number;
}

const addBookToCart = async (option: IOrderParams) => {
  const response = await instance.post<{ userCart: ICartType[] }>(
    '/cart/add',
    option,
  );

  return response.data.userCart;
};

export default addBookToCart;
