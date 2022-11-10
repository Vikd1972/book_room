import React from 'react';

import mail from '../../assets/picture/mail.png';
import hide from '../../assets/picture/hide.png';

import InputOneLineWrapper from './InputOneLine.styles';

interface IMyInput {
  type?: string;
  textWhenChanged?: string;
  placeholder?: string;
  formikName?: boolean;
  formikError?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formikField?: any;
  icon?: string;
  changeField?: boolean;
  textInfo?: string;
  field?: string;
}

const InputOneLine: React.FC<IMyInput> = (props) => {
  let icon;
  switch (props.icon) {
    case 'mail':
      icon = mail;
      break;
    case 'hide':
      icon = hide;
      break;
    default:
  }

  return (
    <InputOneLineWrapper
      isValid={!!props.formikError}
      isActive={props.formikName}
    >
      <div className="input-field">
        <div className="input-icon">
          <img
            src={icon}
            alt="icon"
          />
        </div>
        <div className="input-width">
          <input
            type={props.type}
            placeholder={props.placeholder}
            autoComplete="off"
            {...props.formikField}
          />
        </div>
      </div>
      {props.formikName && props.formikError
        ? (<div className="input-title error"><p>{props.formikError}</p></div>)
        : (<div className="input-title">{props.textWhenChanged}</div>)
      }
    </InputOneLineWrapper>
  );
};

export default InputOneLine;
