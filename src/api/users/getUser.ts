import instance from '..';

const getUser = async () => {
  const response = await instance.get("/auth/token")
  return response.data.user;
}

export default getUser;