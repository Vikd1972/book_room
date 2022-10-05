import showToast from '../Validation/showToast';
import instance from '.';

const authUser = async (props: any) => {
  try {
    const response = await instance
      .post("/auth/login/", {
        email: props.values.email,
        pass: props.values.password,
      })
    localStorage.setItem('token', response.data.token);
    
    return response.data.user;

  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default authUser;