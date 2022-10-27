import instance from '..';
import { CartType } from '../../store/usersSlice';

const getCart = async (id: number) => {  
  const response = await instance.post<{userCart: CartType[]}>("/cart", { id })
  
  return response.data.userCart;
}
export default getCart;