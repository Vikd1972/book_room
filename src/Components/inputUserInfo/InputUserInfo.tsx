import React from 'react';
import { useFormik } from 'formik';
import InputUserField from './InputUserInfo.styled'

interface MyInput {
  type?: string,
  name?: string,
  value?: string,
  placeholder?: string,
  formikName?: boolean,
  formikError?: string,
  formikField?: any,
  icon?: string,
  changeField?: any,
}

const InputUserInfo: React.FC<MyInput> = (props: MyInput, ...formik: any) => {
  return (
    <InputUserField icon={props.icon}>



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

    </InputUserField>
  )

}

export default InputUserInfo;