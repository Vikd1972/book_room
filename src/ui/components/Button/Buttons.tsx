import React from 'react';

import { ButtonWrapper } from './Buttons.styles';

export interface IMyButton {
  text?: string;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  isDisable?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<IMyButton> = (props) => {
  return (
    <ButtonWrapper
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      isDisabled={!!props.isDisable}
    >
      {props.text}
    </ButtonWrapper >
  );
};

export default Button;
