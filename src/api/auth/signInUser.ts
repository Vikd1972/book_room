import instance from '..';
import type { IBookType } from '../../store/booksSlice';
import type { IUserType, ICartType } from '../../store/usersSlice';

interface IAuthParams {
  email: string;
  password: string;
}

interface IResponseParams {
  user: IUserType;
  userCart: ICartType[];
  favorites: IBookType[];
  token: string;
}

const signIn = async (options: IAuthParams) => {
  const response = await instance.post<IResponseParams>(
    '/auth/signIn',
    options,
  );
  localStorage.setItem('token', response.data.token);

  return response.data;
};

export default signIn;
