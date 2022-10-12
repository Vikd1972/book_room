import styled from 'styled-components'
import { css } from 'styled-components';

import user from '../../../utils/picture/user.png'
import mail from '../../../utils/picture/mail.png'
import hide from '../../../utils/picture/hide.png'

export interface Icon {
  icon?: string;
}

const InputTwoLineWrapper = styled.div<Icon>`
margin-top: 10px;
margin-top: 20px;
width: 100%;
height: 64px;
border-radius: 16px;
background-color: #F0F4EF;
color: #344966;
display: flex;
flex-direction: column;
  ${(props) => {
    switch (props.icon) {
      case 'user':
        return css`
          background-image: url(${user});
          background-position: 24px 20px;
        `;
        break;
      case 'mail':
        return css`
          background-image: url(${mail});
          background-position: 0 -3px;
        `;
        break;
      case 'hide':
        return css`
          background-image: url(${hide});
          background-position: 24px 20px;
        `;
        break;
      default:
        return css`
          background-image: none;
        `;      
    }
  }}
background-repeat: no-repeat;
.name {
  margin-top: 6px;
  margin-left: 64px;
  font-size: 14px;
  line-height: 24px;
}
.value {
  margin-left: 64px;
  font-size: 16px;
  line-height: 28px;
}
input {
  margin-left: 64px;
  font-size: 16px;
  line-height: 28px;
  background-color: transparent;
  border: none;
  outline: none;
}
.user__info-password {
  margin-top: 40px;
}
.err {
  color: #ff0000;
}
`;

export default InputTwoLineWrapper