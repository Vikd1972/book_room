import styled from 'styled-components';

const HeaderWrapper = styled.div`
margin-top: 24px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
.panel__logotype {
  min-width: 88px;
  height: 46px;
  cursor: pointer;
}
form {
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 770px;
  width: 100%;
}
.search__title {
  width: 110px;
}
.search__field {
  max-width: 630px;
  width: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #F0F4EF;
}
.search__field-icon {
  padding: 22px 24px;
  height: 100%;
  z-index: 1;
  display: flex;
}
.search__field-icon img {
  width: 24px;
  height: 24px;
}
.search__input {
  width: 100%;
}
.search__input input {
  width: 100%;
  height: 64px;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.75px;
  background-color: transparent;
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
.button__icon {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #344966;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button__icon:hover {
  background-color: #0D1821;
}
.counter {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-top: -7px;
  margin-left: -40px;
  font-size: 13px;
  font-weight: 700;
  color: #344966;
  background-color: #BFCC94;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  width: 231px;
}
`;

export default HeaderWrapper;
