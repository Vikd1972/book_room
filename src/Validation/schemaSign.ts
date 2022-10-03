import { object, string } from 'yup';
import { SchemaSign } from './schemaType';

const schemaSign = object().shape({
  email: string().email('must be a valid email').required('Required email'),
  password: string().min(3, 'must be at least 3 characters long').required('Required password'),
  confirmPassword: string().min(3, 'must be at least 3 characters long').required('Required confirm password'),
}) as SchemaSign;

export default schemaSign;