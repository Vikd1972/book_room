import instance from '..';
import type { ICartType } from '../../store/usersSlice';

const getCart = async (id: number) => {
  const response = await instance.post<{ userCart: ICartType[] }>('/cart', { id });

  return response.data.userCart;
};
export default getCart;
