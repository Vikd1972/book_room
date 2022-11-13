import styled from 'styled-components';

const LoginWrapper = styled.div`
margin-top: 90px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
@media (max-width: 1440px) {
  max-width: 805px;
}
@media (max-width: 834px) {
  margin-top: 30px;
  flex-direction: column;
  max-width: 290px;
}
.login {
  display: flex;
  flex-direction: column;
}
.login__name {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  color: #0D1821;
  display: flex;
  flex-direction: row;
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
  }
}
.login__name-toggle {
  margin-left: 5px;
  color: #0D1821; 
  cursor: pointer;
  text-decoration: none;
  color: #008888;
}
.login__form {
  margin-top: 60px;
  width: 413px;
  margin-bottom: 60px;
  @media (max-width: 1440px) {
    margin: 25px 0 0 0;
    width: 392px;
  }
  @media (max-width: 834px) {  
    margin: 15px 0 0 0;
    width: 290px;
  }
}
.login-image {
  margin-left: 255px;
  margin-bottom: -70px;
  width: 612px;
  height: 522px;
  @media (max-width: 1440px) {
    margin-left: 20px;
    width: 390px;
    height: 333px;
  }
  @media (max-width: 834px) {  
    margin: 60px 0 0 0;
    width: 290px;
    height: 247px;
  }
}
.login-image img {
  @media (max-width: 1440px) {
    width: 390px;
    height: 333px;
  }
  @media (max-width: 834px) {  
    width: 290px;
    height: 247px;
  }
}
.button {
  margin-top: 50px;
  max-width: 151px;
  width: 100%;
  @media (max-width: 834px) {  
    margin-top: 40px;
  }
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

export default LoginWrapper;
