import styled from 'styled-components'

import men from '../../utils/picture/men1.png'
import mail from '../../utils/picture/mail.png'
import hide from '../../utils/picture/hide.png'

const SignUp = styled.div`
margin-top: 90px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
.login {
  display: flex;
  flex-direction: column;
}
.login__name {
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #0D1821;
  display: flex;
  flex-direction: row;
}
.login__name div {
  margin-right: 5px;
}
.login__name-toggle {
  color: #0D1821; 
  cursor: pointer;
  text-decoration: none;
}
.login__form {
  margin-top: 60px;
  width: 413px;
}
.login-form__input-width {
  width: 100%;
  height: 64px;
  margin-bottom: 9px;
}
.login-form__width-setter {
  margin-left: 64px;
  height: 64px;
}
.login-form__width-setter input {
  width: 100%;
  height: 64px;
  padding-left: 64px;
  margin-left: -64px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;

  font-size: 16px;
  font-weight: 400;
}
.mail input {
  background-image: url(${mail});
  background-repeat: no-repeat;
}
.hide input {
  background-image: url(${hide});
  background-repeat: no-repeat;
  background-position-x: 25px;
  background-position-y: 20px;
}
.login-form__input-name {
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  margin-bottom: 30px;
}
.btn {
  margin-top: 30px;
  width: 151px;
  height: 44px;
  border-radius: 16px;
  background-color: #344966;
  color: #F0F4EF;
  font-size: 16px;
  line-height: 24px;
}
.btn:hover{
  cursor: pointer;
  background-color: #0D1821;
}
.login-pic {
  margin-bottom: -70px;
  width: 612px;
  height: 522px;
  background-image: url(${men});
  background-repeat: no-repeat;
}
`;

export default SignUp
