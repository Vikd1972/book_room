import instance from '..';
import type { ICartType } from '../../store/usersSlice';

const getCart = async () => {
  const response = await instance.post<{ userCart: ICartType[] }>('/cart');

  return response.data.userCart;
};
export default getCart;
