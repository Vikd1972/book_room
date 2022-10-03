import { object, string } from 'yup';
import { SchemaLogin } from './schemaType';

const schemqaLogin = object().shape({
  email: string().email('must be a valid email').required('Required email'),
  password: string().min(3, 'must be at least 3 characters long').required('Required password'),
}) as SchemaLogin;

export default schemqaLogin;