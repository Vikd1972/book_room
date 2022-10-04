import React from 'react';
import { Link } from "react-router-dom";

import { ButtonLinkStyle, ButtonSubmitStyle } from './Buttons.styled'

interface MyButton {
  to?: string,
  width?: string,
  text?: string,
}
export const ButtonLink: React.FC<MyButton> = (props: MyButton) => {
  return (
    <ButtonLinkStyle width={props.width}>
      <Link
        to={`${props.to}`}>
        <div>
          {props.text}
        </div>
      </Link>
    </ButtonLinkStyle >
  )
}

export const ButtonSubmit: React.FC<MyButton> = (props: MyButton) => {
  return (
    <ButtonSubmitStyle width={props.width}>
      <div>
        {props.text}
      </div>
    </ButtonSubmitStyle >
  )
}
