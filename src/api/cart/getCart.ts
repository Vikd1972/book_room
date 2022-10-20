import instance from '..';
import { CartType } from '../../store/usersSlice';

const getCart = async (id: number) => {  
  const response = await instance.post<CartType[]>("/cart/", {id})

  return response.data as CartType[];
}
export default getCart;