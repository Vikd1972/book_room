import showToast from '../validation/showToast';
import instance from '.';

const changeUserData = async (props: any) => {
  try {
    
    const response = await instance
      .put("/users/", {
        fullname: props.values.fullname,
        email: props.values.email,
        oldPassword: props.values.oldPassword,
        newPassword: props.values.newPassword,
        confirmPassword: props.values.confirmPassword,
      })
    
    return response.data.user;

  } catch (err: any) {
    showToast(err.response.data.message);
    console.log(err);
  }
}

export default changeUserData;