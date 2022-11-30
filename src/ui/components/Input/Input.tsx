/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react';

import InputWrapper from './Input.styles';

interface IMyInput {
  type?: string;
  textInfo?: string;
  textWhenChanged?: string;
  field?: string;
  placeholder?: string;
  formikName?: boolean;
  formikError?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formikField?: any;
  icon?: string;
  changeField?: boolean;
  isAuth?: boolean;
  changeFieldAuth?: boolean;
  onClick?: () => void;
}

const Input: React.FC<IMyInput> = (props) => {
  return (
    <InputWrapper
      isValid={!!props.formikError}
      isActive={props.formikName}
      onClick={props.onClick}
    >
      <div className="container">
        <div className="input-icon">
          <img
            src={props.icon}
            alt="icon"
          />
        </div>
        <div className="input-field">
          {props.changeFieldAuth && !props.changeField && <div className="title">{props.placeholder}</div>}
          {!props.changeField
            ? props.formikName && props.formikError
              ? (<div className="name error">{props.formikError}</div>)
              : (<div className="name">{props.textWhenChanged}</div>)
            : (<div className="name">{props.textInfo}</div>)
          }
          {!props.changeField
            ? (<input
              className="value"
              type={props.type}
              autoComplete="new-password"
              placeholder={props.placeholder}
              {...props.formikField}
            />)
            : (<div className="value">{props.field}</div>)
          }
        </div>
      </div>
      {props.isAuth && <div className="input-title">{props.textWhenChanged}</div>}
    </InputWrapper >
  );
};

export default Input;
