import React from 'react';

import InputField from './InputAuth.styled';
import { MyInput } from '../../../interfaces/Interface'

const InputAuth: React.FC<MyInput> = (props: MyInput, ...formik: any) => {
  return (
    <InputField icon={props.icon}>
      <div className='input-width'>
        <div className="width-setter">
          <input
            type={props.type}
            placeholder={props.placeholder}
            autoComplete="off"
            {...props.formikField}
          />
        </div>
      </div>
      {props.formikName && props.formikError ? (
        <div className='input-name err'>{props.formikError}</div>
      ) : (
        <div className='input-name'>Enter your email</div>
      )}      
    </InputField>
  )
}

export default InputAuth;