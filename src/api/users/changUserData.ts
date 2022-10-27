import instance from '..';
import { UserType } from '../../store/usersSlice';

interface NewUserData {
  fullname: string,
  email: string,
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
};

const changeUserData = async (options: NewUserData) => {
  const response = await instance.patch<{user: UserType}>("/users", options)
  
  return response.data.user;
}

export default changeUserData;