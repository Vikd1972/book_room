import showToast from '../validation/showToast';
import instance from '.';

const signUser = async (props: any) => {
  try {
    const response = await instance
      .post("/auth/sign/", {
        email: props.email,
        pass: props.password,
      })
    localStorage.setItem('token', response.data.token);

    return response.data.user;

  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default signUser;