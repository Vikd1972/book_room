import instance from '..';

import type { ICartType } from '../../store/usersSlice';

interface IDeleteParams {
  cartId: number;
}

const deleteBookInCart = async (options: IDeleteParams) => {
  const response = await instance.delete<{ userCart: ICartType[] }>(
    '/cart',
    {
      data: options,
    },
  );

  return response;
};

export default deleteBookInCart;
