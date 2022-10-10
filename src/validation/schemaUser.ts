import { object, string } from 'yup';
import { SchemaUser } from './schemaType';

const schemaUser = object().shape({
  fullname: string().matches(/^$|\w{3,}/, 'must be at least 3 characters long'),
  email: string().email('must be a valid email'),
  oldPassword: string().min(3, 'must be at least 3 characters long'),
  newPassword: string().min(3, 'must be at least 3 characters long'),
  confirmPassword: string().min(3, 'must be at least 3 characters long'),
}) as SchemaUser;

export default schemaUser;