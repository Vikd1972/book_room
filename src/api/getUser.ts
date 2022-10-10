import showToast from '../validation/showToast';
import instance from '.';

const getUser = async () => {
  try {
    const response = await instance
      .get("/auth/token/")

    return response.data.user;
    
  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default getUser;