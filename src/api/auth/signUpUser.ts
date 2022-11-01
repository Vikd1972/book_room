import instance from '..';
import type { IUserType } from '../../store/usersSlice';

interface ISignUpParams {
  email: string;
  password: string;
}

const signUpUser = async (options: ISignUpParams) => {
  const response = await instance.post<{ user: IUserType; token: string }>('/auth', options);
  localStorage.setItem('token', response.data.token);

  return response.data.user;
};

export default signUpUser;
