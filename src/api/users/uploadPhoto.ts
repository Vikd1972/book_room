import instance from '..';
import { UserType } from '../../store/usersSlice';

const uploadPhoto = async (userPhoto: string) => {
  const response = await instance.post("/upload", { userPhoto })
  
  return response.data.user as UserType;
}

export default uploadPhoto;