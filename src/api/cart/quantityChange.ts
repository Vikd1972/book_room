import instance from '..';

import type { ICartType } from '../../store/usersSlice';

interface IOrderParams {
  count: number;
  cartId: number;
}

const quantityChange = async (options: IOrderParams) => {
  const response = await instance.patch<{ userCart: ICartType[] }>(
    '/cart/change',
    options,
  );

  return response.data.userCart;
};

export default quantityChange;
