import instance from '..';

import { CartType } from '../../store/usersSlice';

interface DeleteParams {
  id: number,
  userId: number,
}

const deleteBookInCart = async (options: DeleteParams) => {
  const response = await instance.delete<{userCart: CartType[]}>("/cart/", {
    data: options
  })

  return response.data.userCart;
}

export default deleteBookInCart;