import instance from '..';
import { UserType } from '../../store/usersSlice';

const getUser = async () => {
  const response = await instance.get<{user: UserType}>("/auth/token")
  
  return response.data.user;
}

export default getUser;