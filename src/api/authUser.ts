import showToast from '../validation/showToast';
import instance from '.';

// interface Props {
//   email: string,
//   password: string,
// }

const authUser = async (props: any) => {  
  try {
    const response = await instance
      .post("/auth/login/", {
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

export default authUser;