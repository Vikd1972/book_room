import styled from 'styled-components';

const UserPassWrapper = styled.div`
max-width: 1280px;
display: flex;
flex-direction: row;
@media (max-width: 834px) {
  max-width: 290px;
  width: 100%;
}
.user__info {
  margin-top: 60px;
  margin-left: 128px;
  width: 522px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    margin: 40px 0 0 20px;
    
  }
  &-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
.title-name {
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
}
.title-button {
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #8D9F4F;
  text-decoration: underline;
  cursor: pointer;
  @media (max-width: 1440px) {
    font-size: 12px;
    line-height: 18px;
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
.button {
  margin-top: 50px;
  width: 170px;
  @media (max-width: 1440px) {
    margin-top: 40px;
  }
}
`;

export default UserPassWrapper;
