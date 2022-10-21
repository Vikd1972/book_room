import instance from '..';
import { UserType } from '../../store/usersSlice';

const uploadPhoto = async (userPhoto: string) => {
  const response = await instance.post<{user: UserType}>("/upload", {userPhoto})
  
  return response.data.user;
}

export default uploadPhoto;