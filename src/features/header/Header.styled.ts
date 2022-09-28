import styled from 'styled-components'

import logo from '../picture/logo_dark.png'
import search from '../picture/search.png'
import cart from '../picture/btn_cart.png'
import save from '../picture/btn_save.png'
import user from '../picture/btn_user.png'

const Heading = styled.div`
margin-top: 24px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
.logo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.logotype {
  width: 88px;
  height: 46px;
  background-image: url(${logo});
  background-repeat: no-repeat;
}
form {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 740px;
  width: 100%;
}
.logo__searchname {
  width: 110px;
}
.logo__width-setter{
  max-width: 628px;
  width: 100%;
  height: 64px;
}
.logo__searchfield {
  height: 64px;
	margin-left: 64px;
}
.logo__searchfield input {
  width: 100%;
  height: 64px;
  padding-left: 64px;
  margin-left: -64px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 26px;
  font-size: 16px;
  font-weight: 400;
}
.buttons {
  width: 198px;
  margin-left: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttons-icon {
  width: 48px;
  height: 48px;
  background-image: url(${cart});
  background-repeat: no-repeat;
}
.btn-cart{

  background-image: url(${cart});
  background-repeat: no-repeat;
  background-position: center;
}
.btn-save {
  background-image: url(${save});
  background-repeat: no-repeat;
}
.btn-user {
  background-image: url(${user});
  background-repeat: no-repeat;
}
.btn {
  width: 231px;
  height: 34px;
  background-color: #344966;
  font-size: 16px;
  font-weight: 500;
  color: #F0F4EF;
  border-radius: 16px;
  text-align: center;
  padding-top: 10px;
  text-decoration: none;
}
.btn:hover{
  cursor: pointer;
  background-color: #0D1821;
}
.poster {
  margin-top: 40px;
  width: auto;
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
}
`;

export default Heading