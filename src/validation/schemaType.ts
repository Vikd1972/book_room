interface ISchemaLogin {
  email?: string;
  password?: string;
}

interface ISchemaSign {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface ISchemaUser {
  fullname?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export { ISchemaLogin, ISchemaSign, ISchemaUser };
