import instance from '..';

import { CartType } from '../../store/usersSlice';

interface OrderParams {
  count: number,
  id: number,
  userId: number,
}

const quantityChange = async (options: OrderParams) => {
  const response = await instance.post("/cart/change", options)

  return response.data.userCart as CartType[];;
}

export default quantityChange;