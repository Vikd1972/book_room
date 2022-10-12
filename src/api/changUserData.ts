import instance from '.';

interface NewUserData {
  fullname: string,
  email: string,
  oldPassword: string,
  newPassword: string,
  confirmPassword: string,
};

const changeUserData = async (options: NewUserData) => {
  const response = await instance.put("/users", {
    fullname: options.fullname,
    email: options.email,
    oldPassword: options.oldPassword,
    newPassword: options.newPassword,
    confirmPassword: options.confirmPassword,
  })
  return response.data.user;
}

export default changeUserData;