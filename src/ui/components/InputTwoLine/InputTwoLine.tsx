/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import InputTwoLineWrapper from './InputTwoLine.styles';

interface IMyInput {
  type?: string;
  textInfo?: string;
  textWhenChanged?: string;
  field?: string;
  placeholder?: string;
  formikName?: boolean;
  formikError?: string;
  formikField?: any;
  icon?: string;
  changeField?: boolean;
}

const InputTwoLine: React.FC<IMyInput> = (props) => {
  return (
    <InputTwoLineWrapper icon={props.icon}>
      {props.changeField ? (
        <>
          {
            props.formikName && props.formikError ? (
              <div className="name err">{props.formikError}</div>
            ) : (
              <div className="name">{props.textWhenChanged}</div>
            )
          }
        </>
      ) : (
        <div className="name">{props.textInfo}</div>
      )}
      {props.changeField ? (
        <input
          className="value"
          type={props.type}
          autoComplete="new-password"
          placeholder={props.placeholder}
          {...props.formikField}
        />
      ) : (
        <div className="value">{props.field}</div>
      )}
    </InputTwoLineWrapper>
  );
};

export default InputTwoLine;
