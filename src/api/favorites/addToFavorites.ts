import instance from '..';
import type { IUserType } from '../../store/usersSlice';

interface IOrderParams {
  bookId: number;
}

const addToFavorites = async (option: IOrderParams) => {
  const response = await instance.post<{ newUser: IUserType }>('/favorites', option);

  return response.data.newUser;
};

export default addToFavorites;
