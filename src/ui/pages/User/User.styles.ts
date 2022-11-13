import styled from 'styled-components';

const UserWrapper = styled.div`
margin-top: 60px;
margin-right: 330px;
max-width: 1280px;
display: flex;
flex-direction: row;
@media (max-width: 1440px) {
  max-width: 805px;
  margin-right: 0;
  width: auto;
}
@media (max-width: 834px) {
  margin-top: 50px;
  flex-direction: column;
}
.user-profile {
  display: flex;
  flex-direction: column;
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

export default UserWrapper;
