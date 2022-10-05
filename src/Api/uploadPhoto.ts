import showToast from '../Validation/showToast';
import instance from '.';
import axios from "axios";

const uploadPhoto = async (file: string) => {
  try {
    const response = await axios.patch("/upload/", file)
    
    console.log(file);

    return response.data.user;

  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default uploadPhoto;