import instance from '..';
import { UserType } from '../../store/usersSlice'

interface OrderParams {
  userId: number,
  bookId: number
}

const addToFavorites = async (option: OrderParams) => {
  const response = await instance.post<{newUser: UserType}>("/books/favorites", option)

  return response.data.newUser;
}

export default addToFavorites;