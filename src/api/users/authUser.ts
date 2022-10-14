import instance from '..';

interface AuthParams {
  email: string,
  password: string,
}

const authUser = async (options: AuthParams) => {
  const response = await instance.post("/auth/login", {
    email: options.email,
    password: options.password,
  })
  localStorage.setItem('token', response.data.token);
  return response.data.user;
}

export default authUser;