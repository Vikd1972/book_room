import instance from '..';

import type { ICartType } from '../../store/usersSlice';

interface IDeleteParams {
  id: number;
  userId: number;
}

const deleteBookInCart = async (options: IDeleteParams) => {
  const response = await instance.delete<{ userCart: ICartType[] }>('/cart', {
    data: options,
  });

  return response.data.userCart;
};

export default deleteBookInCart;
