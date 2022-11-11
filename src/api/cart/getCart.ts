import instance from '..';
import type { ICartType } from '../../store/usersSlice';

const getCart = async () => {
  const response = await instance.get<{ userCart: ICartType[] }>('/cart');

  return response.data.userCart;
};
export default getCart;
