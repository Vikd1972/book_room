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
  const response = await instance.put("/users", options)
  
  return response.data.user as UserType;
}

export default changeUserData;