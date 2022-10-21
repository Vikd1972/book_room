import instance from '..';
import { UserType } from '../../store/usersSlice';

interface SignUpParams {
  email: string,
  password: string,
};

const signUpUser = async (options: SignUpParams) => {
  const response = await instance.post<{user: UserType, token: string}>("/auth/sign", options)
  localStorage.setItem('token', response.data.token);
  
  return response.data.user;
}

export default signUpUser;