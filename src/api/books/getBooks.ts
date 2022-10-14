import instance from '..';

import config from '../../config';

const getBooks = async (skip: number) => {
  console.log('skip: ' + skip + ', pagination: ' + config.pagination); 

  const response = await instance.post("/books", {
    skip: skip,
    pagination: config.pagination
  })
  
  return response.data;
}

export default getBooks;