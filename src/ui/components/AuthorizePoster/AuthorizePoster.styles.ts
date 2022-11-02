import styled from 'styled-components';

import fairy from '../../assets/picture/fairy.png';
import castle from '../../assets/picture/castle.png';

const AuthorizePosterWrapper = styled.div`
margin-top: 102px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
.poster {
  background-color: #F0F4EF;
  border-radius: 16px;
  background-image: url(${fairy}); 
  background-repeat: no-repeat;
  background-position: 824px ;
  padding: 0 98px 0 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .poster__image {
    width: 521px;
    height: 462px;
    margin-top: -62px;
    background-image: url(${castle}); 
    background-repeat: no-repeat;
  }
  .poster__field {
    margin-left: 135px;
    display: flex;
    flex-direction: column;
    &_name {
      margin-top: 80px;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: #0D1821;
    }
    &_text {
      margin: 0;
      font-size: 20px;
      line-height: 30px;
      color: #344966;
    }
    .button {
      margin-top: 60px;
      max-width: 230px;
      width: 100%;
    }
}
}
`;

export default AuthorizePosterWrapper;
