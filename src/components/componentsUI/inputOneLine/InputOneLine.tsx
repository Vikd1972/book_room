import React from 'react';

import InputOneLineWrapper from './InputOneLine.styles';
import { MyInput } from '../../../interfaces/Interface'

const InputOneLine: React.FC<MyInput> = (props, ...formik: any) => {
  return (
    <InputOneLineWrapper icon={props.icon}>
      <div className='input-field'>
        <div className='input-icon'></div>
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
      </div>
      {props.formikName && props.formikError ? (
        <div className='input-name err'>{props.formikError}</div>
      ) : (
          <div className='input-name'>{props.textWhenChanged}</div>
      )}
    </InputOneLineWrapper>
  )
}

export default InputOneLine;
