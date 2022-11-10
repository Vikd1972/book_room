import styled from 'styled-components';

const AppWrapper = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Poppins', sans-serif;
letter-spacing: 0.75px;
font-weight: 500;
font-size: 16px;
line-height: 28px;
.toast {
  width: 400px;
}
.toast-body {
  font-size: 30px;
  color: #ff9999;
}
`;

export default AppWrapper;
