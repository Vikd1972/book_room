import instance from '..';

interface OrderParams {
  count: number
  id: number
}

const quantityCange = async (options: OrderParams) => {
  const response = await instance.post("/cart/change", options)

  return response;
}

export default quantityCange;