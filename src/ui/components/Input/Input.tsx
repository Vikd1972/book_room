/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import user from '../../assets/picture/user.png';
import mail from '../../assets/picture/mail.png';
import hide from '../../assets/picture/hide.png';

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
  changeFieldAuth?: boolean;
  onClick?: () => void;
}

const Input: React.FC<IMyInput> = (props) => {
  let icon;
  switch (props.icon) {
    case 'mail':
      icon = mail;
      break;
    case 'hide':
      icon = hide;
      break;
    case 'user':
      icon = user;
      break;
    default:
  }
  console.log(props.changeFieldAuth);

  return (
    <InputWrapper
      isValid={!!props.formikError}
      isActive={props.formikName}
      onClick={props.onClick}
    >
      <div className="input-icon">
        <img
          src={icon}
          alt="icon"
        />
      </div>
      <div className="input-field">
        {!props.changeFieldAuth && <div className="title">{props.placeholder}</div>}
        {props.changeField
          ? props.formikName && props.formikError
            ? (<div className="name error">{props.formikError}</div>)
            : (<div className="name">{props.textWhenChanged}</div>)
          : (<div className="name">{props.textInfo}</div>)
        }
        {props.changeField || props.changeFieldAuth
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
    </InputWrapper>
  );
};

export default Input;
