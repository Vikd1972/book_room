import instance from '..';

const deleteBookInCart = async (id: number) => {
  const response = await instance.post("/cart/change", id)

  return response;
}

export default deleteBookInCart;