import instance from '..';

interface AuthParams {
  email: string,
  password: string,
}

const authUser = async (options: AuthParams) => {
  const response = await instance.post("/auth/login", options)
  localStorage.setItem('token', response.data.token);
  return response.data.user;
}

export default authUser;