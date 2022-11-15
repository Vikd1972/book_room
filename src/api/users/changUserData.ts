/* eslint-disable no-console */
import instance from '..';
import type { IUserType } from '../../store/usersSlice';

interface INewUserData {
  fullname: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const changeUserData = async (options: INewUserData) => {
  console.log(options);

  const response = await instance.patch<{ user: IUserType }>('/users', options);

  return response.data.user;
};

export default changeUserData;
