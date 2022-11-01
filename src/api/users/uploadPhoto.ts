import instance from '..';
import type { IUserType } from '../../store/usersSlice';

const uploadPhoto = async (userPhoto: string) => {
  const response = await instance.post<{ user: IUserType }>('/users', { userPhoto });

  return response.data.user;
};

export default uploadPhoto;
