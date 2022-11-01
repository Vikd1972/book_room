import styled from 'styled-components';

import men from '../../assets/picture/men1.png';

const SignUpWrapper = styled.div`
margin-top: 90px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
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
  color: #008888;
}
.login__form {
  margin-top: 60px;
  width: 413px;
}
.login-pic {
  margin-left: 255px;
  margin-bottom: -70px;
  width: 612px;
  height: 522px;
  background-image: url(${men});
  background-repeat: no-repeat;
}
.toast {
  width: 400px;
}
.toast-body {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: #ff9999;
}
.btn {
  margin-top: 50px;
  max-width: 151px;
  width: 100%;
}
`;

export default SignUpWrapper;
