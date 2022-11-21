/* eslint-disable no-console */
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
  console.log(response);

  return response.status;
};

export default addBookToCart;
