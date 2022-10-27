import styled from 'styled-components'

const UserWrapper = styled.div`
margin-top: 60px;
margin-right: 330px;
max-width: 1280px;
display: flex;
flex-direction: row;
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

export default UserWrapper