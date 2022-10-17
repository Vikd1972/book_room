import instance from '..';

import config from '../../config';

const getRecommendationsBooks = async (randomBooks: number[]) => {
  const response = await instance.post("/books/random", {randomBooks})
  return response.data;
}

export default getRecommendationsBooks;