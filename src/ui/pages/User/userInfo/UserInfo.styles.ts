import styled from 'styled-components';

const UserInfoWrapper = styled.div`
max-width: 1280px;
display: flex;
flex-direction: row;
.user__info {
  margin-left: 128px;
  width: 522px;
  display: flex;
  flex-direction: column;
  &-title {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &-inputs {
    margin-top: 10px;
  }
}
.title-name {
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
}
.title-button {
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #8D9F4F;
  text-decoration: underline;
  cursor: pointer;
}
.button {
  margin-top: 50px;
  width: 170px;
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

export default UserInfoWrapper;
