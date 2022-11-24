import instance from '..';

interface IOrderParams {
  bookId: number;
}

const addOrRemoveToFavorites = async (option: IOrderParams) => {
  const response = await instance.post('/favorites', option);

  return response;
};

export default addOrRemoveToFavorites;
