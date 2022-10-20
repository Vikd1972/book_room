import instance from '..';

import { CartType } from '../../store/usersSlice';

interface DeleteParams {
  id: number,
  userId: number,
}

const deleteBookInCart = async (options: DeleteParams) => {
  const response = await instance.delete("/cart/", {
    data: options
  })

  return response.data.userCart as CartType[];
}

export default deleteBookInCart;