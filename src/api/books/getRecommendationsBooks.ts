import instance from '..';

import config from '../../config';

const getRecommendationsBooks = async () => {
  const response = await instance.get("/books/")

  return response.data;
}

export default getRecommendationsBooks;