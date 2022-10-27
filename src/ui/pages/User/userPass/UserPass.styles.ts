import styled from 'styled-components'

const UserPassWrapper = styled.div`
margin-top: 60px;
max-width: 1280px;
display: flex;
flex-direction: row;
.user {
  max-width: 955px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
.user__info {
  margin-left: 128px;
  width: 522px;
  display: flex;
  flex-direction: column;
}
.text {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-name {
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
}
.text-btn {
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #8D9F4F;
  text-decoration: underline;
  cursor: pointer;
}
.info {
  margin-top: 10px;
}
.err {
  color: #ff0000;
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
  margin-left: 128px;
  margin-top: 20px;
  max-width: 170px;
  width: 100%;
}
`;

export default UserPassWrapper