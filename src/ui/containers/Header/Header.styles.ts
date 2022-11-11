import styled from 'styled-components';

const HeaderWrapper = styled.div`
margin-top: 24px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media (max-width: 1440px) {
  max-width: 804px;
}
@media (max-width: 834px) {
  max-width: 290px;
  flex-wrap: wrap;
}
.panel__logotype {
  min-width: 88px;
  height: 46px;
  cursor: pointer;
  @media (max-width: 834px) {
    min-width: 62px;
    height: 31px;
  }
}
.panel__logotype img {
  @media (max-width: 834px) {
  min-width: 62px;
  height: 31px;
  }
}
.search__title {
  padding-left: 28px;
  width: 67px;
  @media (max-width: 834px) {
    padding: 0;
    width: auto;
    font-size: 14px;
  }
}
.search__field {
  max-width: 630px;
  width: 100%;
  padding-right: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.backrground};
  @media (max-width: 1440px) {
    @media (min-width: 835px) {
      max-width: 247px;
      width: 100%;
      margin-right: 40px;
    }
  }
  @media (max-width: 834px) {
    width: 290px;
    width: 100%;
    margin-top: 17px;
    padding-right: 0;
    order: 1;
  }
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
  @media (max-width: 835px) {
    width: 135px;
    margin-left: 0;
  }
}
.button__icon {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #344966;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 835px) {
    width: 33px;
    height: 33px;
    border-radius: 16px;
  }
}
.button__icon img {
  @media (max-width: 835px) {
    object-fit: cover;
    width: 18px;
    height: 18px;
  }
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
  @media (max-width: 834px) {
    margin-left: -25px;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    font-size: 10px;
    line-height: 10px;
  }
}
.button {
  width: 231px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 834px) {
    width: 135px;
    font-size: 12px;
    line-height: 18px;
  }
}
`;

export default HeaderWrapper;
