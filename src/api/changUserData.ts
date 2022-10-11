import showToast from '../validation/showToast';
import instance from '.';

const changeUserData = async (props: any) => {
  try {
    
    const response = await instance
      .put("/users/", {
        fullname: props.fullname,
        email: props.email,
        oldPassword: props.oldPassword,
        newPassword: props.newPassword,
        confirmPassword: props.confirmPassword,
      })
    
    return response.data.user;

  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default changeUserData;