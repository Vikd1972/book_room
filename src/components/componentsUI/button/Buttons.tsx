import React from 'react';
import { Link } from "react-router-dom";

import { ButtonLinkStyle, ButtonSubmitStyle } from './Buttons.styled'
import { MyButton } from '../../../interfaces/Interface'

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

export const ButtonSubmit: React.FC<MyButton & {className?:string}> = (props) => {
  return (
    <ButtonSubmitStyle
      type='submit'
      width={props.width}
    className={props.className}
    >
      <div>
        {props.text}
      </div>
    </ButtonSubmitStyle >
  )
}
