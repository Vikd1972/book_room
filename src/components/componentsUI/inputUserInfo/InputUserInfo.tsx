import React from 'react';

import InputUserField from './InputUserInfo.styled'
import { MyInput } from '../../../interfaces/Interface'

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
          autoComplete="new-password"
          placeholder={props.placeholder}
          {...props.formikField}
        />
      ) : (
          <div className='value'>{props.field}</div>
      )}
    </InputUserField>
  )
}

export default InputUserInfo;