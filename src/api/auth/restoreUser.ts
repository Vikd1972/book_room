import instance from '..';
import type { IUserType, ICartType } from '../../store/usersSlice';

const restoreUser = async () => {
  const response = await instance.get<{ user: IUserType; userCart: ICartType[] }>('/auth');

  return response.data;
};

export default restoreUser;
