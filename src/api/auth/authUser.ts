import instance from '..';
import type { IUserType, ICartType } from '../../store/usersSlice';

interface IAuthParams {
  email: string;
  password: string;
}

const authUser = async (options: IAuthParams) => {
  const response = await instance.post<{ user: IUserType; userCart: ICartType[]; token: string }>(
    '/auth',
    options,
  );
  localStorage.setItem('token', response.data.token);

  return response.data;
};

export default authUser;
