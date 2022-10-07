import showToast from '../Validation/showToast';
import instance from '.';
import axios from "axios";


// return axios.post("http://localhost:5000/upload", fd, config)





const uploadPhoto = async (user_Photo: string) => {

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };
    let fd = new FormData();
    fd.append('file', user_Photo)
    
    const response = await instance.post("/upload/", fd, config)

    return response.data.user;

  } catch (err: any) {
    // showToast(err.response.data.message);
    console.log(err);
  }
}

export default uploadPhoto;