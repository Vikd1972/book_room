import React from 'react';

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
  // eslint-disable-next-line no-console
  console.log(props.placeholder);

  return (
    <InputOneLineWrapper icon={props.icon}>
      <div className="input-field">
        <div className="input-icon" />
        <div className="input-width">
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
      {props.formikName && props.formikError
        ? (<div className="input-name err">{props.formikError}</div>)
        : (<div className="input-name">{props.textWhenChanged}</div>)
      }
    </InputOneLineWrapper>
  );
};

export default InputOneLine;
