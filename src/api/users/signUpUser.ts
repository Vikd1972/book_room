import instance from '..';

interface SignUpParams {
  email: string,
  password: string,
};

const signUpUser = async (options: SignUpParams) => {
  const response = await instance.post("/auth/sign", {
    email: options.email,
    password: options.password,
  })
  localStorage.setItem('token', response.data.token);
  return response.data.user;
}

export default signUpUser;