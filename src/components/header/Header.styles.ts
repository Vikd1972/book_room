import styled from 'styled-components'

import logo from '../../utils/picture/logo_dark.png'
import search from '../../utils/picture/search.png'
import cart from '../../utils/picture/btn_cart.png'
import save from '../../utils/picture/btn_save.png'
import user from '../../utils/picture/btn_user.png'

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
}
  /* height: 34px;
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
} */
`;

export default HeaderWrapper