import React from 'react';
import { useFormik } from 'formik';
import InputUserField from './InputUserInfo.styled'

interface MyInput {
  type?: string,
  textInfo?: string,
  textWhenChanged?: string,
  value?: string,
  placeholder?: string,
  formikName?: boolean,
  formikError?: string,
  formikField?: any,
  icon?: string,
  changeField?: boolean,
}

const InputUserInfo: React.FC<MyInput> = (props: MyInput, ...formik: any) => {
  return (
    <InputUserField icon={props.icon}>
        {props.changeField ? (
          <>
            {props.formikName && props.formikError ? (
              <div className='name err'>{props.formikError}</div>
            ) : (
              <div className='name'>{props.textWhenChanged}</div>
            )}
          </>
        ) : (
          <div className='name'>{props.textInfo}</div>
        )}
        {props.changeField ? (
          <input
            className='value'
            type={props.type}
            autoComplete="off"
            placeholder={props.placeholder}
            {...props.formikField}
          />
        ) : (
          <div className='value'>{props.value}</div>
        )}
    </InputUserField>
  )

}

export default InputUserInfo;