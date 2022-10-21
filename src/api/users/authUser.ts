import instance from '..';
import { UserType } from '../../store/usersSlice';

interface AuthParams {
  email: string,
  password: string,
}

const authUser = async (options: AuthParams) => {
  const response = await instance.post<{user: UserType, token: string}>("/auth/login", options)
  localStorage.setItem('token', response.data.token);
  
  return response.data.user;
}

export default authUser;