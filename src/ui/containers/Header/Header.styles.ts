import styled from 'styled-components';

import logo from '../../assets/picture/logo_dark.png';
import search from '../../assets/picture/search.png';
import cart from '../../assets/picture/btn_cart.png';
import save from '../../assets/picture/btn_save.png';
import user from '../../assets/picture/btn_user.png';

const HeaderWrapper = styled.div`
margin-top: 24px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
.top-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.panel__logotype {
  min-width: 88px;
  height: 46px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  cursor: pointer;
}
form {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 770px;
  width: 100%;
}
.panel__search {
  width: 110px;
}
.search-icon {
  margin: 2px 0 0 20px;
  width: 64px;
  height: 64px;
  border-radius: 16px 0 0 16px;
  background-color: #F0F4EF;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center center;
  z-index: 1;
}
.search__width-setter{
  max-width: 670px;
  width: 100%;
  height: 64px;
}
.search__searchfield {
  height: 64px;
}
.search__searchfield input {
  width: 100%;
  height: 64px;
  padding-left: 64px;
  margin-left: -64px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
}
.panel__buttons {
  width: 198px;
  margin-left: 33px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttons-icon {
  width: 48px;
  height: 48px;
  /* background-image: url(${cart});
  background-repeat: no-repeat; */
}
.button-cart{
  background-image: url(${cart});
  background-repeat: no-repeat;
  background-position: center;
}
#cart {
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: #344966;
  font-family: 'Poppins', sans-serif;
  width: 24px;
  height: 20px;
  padding-top: 4px;
  margin-top: -7px;
  margin-left: -40px;
  border-radius: 12px;
  background-color: #BFCC94;
  text-align: center;
}
.button-favorite {
  background-image: url(${save});
  background-repeat: no-repeat;
}
.button-user {
  background-image: url(${user});
  background-repeat: no-repeat;
}
.button {
  width: 231px;
}
`;

export default HeaderWrapper;
