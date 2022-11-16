import instance from '..';
import type { IUserType } from '../../store/usersSlice';

interface IAuthParams {
  email: string;
  password: string;
}

const authUser = async (options: IAuthParams) => {
  const response = await instance.post<{ user: IUserType; token: string }>(
    '/auth',
    options,
  );
  localStorage.setItem('token', response.data.token);

  return response.data.user;
};

export default authUser;
