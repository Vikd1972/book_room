export interface Values {
  fullname?: string;
  email?: string;
  password?: string;
  confirmPassword: string;
  oldPassword?: string;
  newPassword?: string;
};

export interface MyButton {
  to?: string,
  width?: string,
  text?: string,
}

export interface MyInput {
  type?: string,
  textInfo?: string,
  textWhenChanged?: string,
  field?: string,
  placeholder?: string,
  formikName?: boolean,
  formikError?: string,
  formikField?: any,
  icon?: string,
  changeField?: boolean,
}