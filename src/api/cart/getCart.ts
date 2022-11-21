/* eslint-disable no-console */
import type { AxiosResponse } from 'axios';
import instance from '..';

import type { ICartType } from '../../store/usersSlice';

type ResponseType = {
  userCart: ICartType[];
};

const getCart = async (): Promise<AxiosResponse<ResponseType>> => {
  const response = await instance.get<{ userCart: ICartType[] }>('/cart');

  return response;
};
export default getCart;
