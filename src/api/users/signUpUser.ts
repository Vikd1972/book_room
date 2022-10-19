import instance from '..';
import { UserType } from '../../store/usersSlice';

interface SignUpParams {
  email: string,
  password: string,
};

const signUpUser = async (options: SignUpParams) => {
  const response = await instance.post("/auth/sign", options)
  localStorage.setItem('token', response.data.token);
  
  return response.data.user as UserType;
}

export default signUpUser;