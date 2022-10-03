import styled from 'styled-components'

import men from '../../Utils/picture/men1.png'

const LogIn = styled.div`
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
  margin-bottom: 60px;
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
.toast {
    width: 400px;
}
.toast-body {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
   color: #ff9999;
}
`;

export default LogIn
