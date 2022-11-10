/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import user from '../../assets/picture/user.png';
import mail from '../../assets/picture/mail.png';
import hide from '../../assets/picture/hide.png';

import InputTwoLineWrapper from './InputTwoLine.styles';

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
}

const InputTwoLine: React.FC<IMyInput> = (props) => {
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
  return (
    <InputTwoLineWrapper
      isValid={!!props.formikError}
      isActive={props.formikName}
    >
      <div className="input-icon">
        <img
          src={icon}
          alt="icon"
        />
      </div>
      <div className="input-field">
        {props.changeField
          ? props.formikName && props.formikError
            ? (<div className="name error">{props.formikError}</div>)
            : (<div className="name">{props.textWhenChanged}</div>)
          : (<div className="name">{props.textInfo}</div>)
        }
        {props.changeField
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
    </InputTwoLineWrapper>
  );
};

export default InputTwoLine;
