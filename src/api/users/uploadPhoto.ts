import instance from '..';

const uploadPhoto = async (userPhoto: string) => {
  const response = await instance.post("/upload", { userPhoto })
  return response.data.user;
}

export default uploadPhoto;