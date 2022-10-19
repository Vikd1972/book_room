import instance from '..';
import { UserType } from '../../store/usersSlice';

const getUser = async () => {
  const response = await instance.get("/auth/token")
  
  return response.data.user as UserType;
}

export default getUser;