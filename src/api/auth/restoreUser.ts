import instance from '..';
import { UserType } from '../../store/usersSlice';

const restoreUser = async () => {
  const response = await instance.get<{user: UserType}>("/auth")
  
  return response.data.user;
}

export default restoreUser;