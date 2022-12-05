import instance from '..';
import type { IUserType, ICartType } from '../../store/usersSlice';
import type { IBookType } from '../../store/booksSlice';

interface IResponseParams {
  user: IUserType;
  userCart: ICartType[];
  favorites: IBookType[];
}

const getUserData = async () => {
  const response = await instance.get<IResponseParams>('/auth/me');

  return response.data;
};

export default getUserData;
