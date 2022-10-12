import styled from 'styled-components'
import { css } from 'styled-components';

import mail from '../../../utils/picture/mail.png'
import hide from '../../../utils/picture/hide.png'

export interface Icon {
  icon?: string;
}

const InputOneLineWrapper = styled.div<Icon>`
margin-top: 20px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
.input-icon {
  margin: 2px;
  width: 64px;
  height: 62px;
  border-radius: 16px 0 0 16px;
  background-color: #F0F4EF;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 1;
  ${(props) => {  
    switch (props.icon) {
      case 'mail':
        return css`
          background-image: url(${mail});
          background-position-x: 1px;
        `;
      break;
      case 'hide':
        return css`
          background-image: url(${hide});
          background-position-x: 25px;
          background-position-y: 20px;
        `;
      break;
      default:
        return css`
          background-image: none;
        `;
    }
  }}
}
.input-field {
  display: flex;
  flex-direction: row;
}
.input-width {
  width: 100%;
  margin-left: -1px;
  height: 64px;
  margin-bottom: 9px;
}
.width-setter {
  /* margin-left: 1px; */
  height: 64px;
}
.width-setter input {
  width: 100%;
  height: 64px;
  padding-left: 64px;
  margin-left: -54px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  /* background-repeat: no-repeat; */
}
.input-name {
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  margin-bottom: 10px;
}
.err {
  color: #ff0000;
}`;

export default InputOneLineWrapper;
