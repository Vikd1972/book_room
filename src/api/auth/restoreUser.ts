import instance from '..';
import type { IUserType } from '../../store/usersSlice';

const restoreUser = async () => {
  const response = await instance.get<{ user: IUserType }>('/auth');

  return response.data.user;
};

export default restoreUser;
