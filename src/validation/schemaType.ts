interface SchemaLogin {
  email?: string,
  password?: string,
}

interface SchemaSign {
  email?: string,
  password?: string,
  confirmPassword?: string,
}

interface SchemaUser {
  fullname?: string,
  email?: string,
  oldPassword?: string,
  newPassword?: string,
  confirmPassword?: string,
}


export { SchemaLogin, SchemaSign, SchemaUser };