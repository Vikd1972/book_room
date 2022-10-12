import React from 'react';

import { ButtonWrapper } from './Buttons.styles'

export interface MyButton {
  text?: string,
  className?: string,
  type?: "button" | "reset" | "submit",
  onClick?: () => void;
}

export const Button: React.FC<MyButton> = (props) => {
  return (
    <ButtonWrapper
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.text}
    </ButtonWrapper >
  )
}
