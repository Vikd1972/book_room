import styled from 'styled-components'
import { css } from 'styled-components';

import mail from '../../../Utils/picture/mail.png'
import hide from '../../../Utils/picture/hide.png'

export interface Icon {
  icon?: string;
}


const InputField = styled.div<Icon>`
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;

.input-width {
  width: 100%;
  height: 64px;
  margin-bottom: 9px;
}
.width-setter {
  margin-left: 64px;
  height: 64px;
}
.width-setter input {
  width: 100%;
  height: 64px;
  padding-left: 64px;
  margin-left: -64px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;
  font-size: 16px;
  font-weight: 400;
  ${(props) => {  
    switch (props.icon) {
      case 'mail':
        return css`
          background-image: url(${mail});
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
background-repeat: no-repeat;
}
.mail input {

}
.input-name {
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  margin-bottom: 30px;
}
.err {
  color: #ff0000;
}`;

export default InputField;
