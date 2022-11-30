import instance from '..';
import type { IUserType, ICartType } from '../../store/usersSlice';
import type { IBookType } from '../../store/booksSlice';

interface IResponseParams {
  user: IUserType;
  userCart: ICartType[];
  favorites: IBookType[];
}

const restoreUser = async () => {
  const response = await instance.get<IResponseParams>('/auth');

  return response.data;
};

export default restoreUser;
