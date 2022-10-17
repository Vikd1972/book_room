import styled from 'styled-components'

import fairy from '../../utils/picture/fairy.png'
import castle from '../../utils/picture/castle.png'

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
  .poster__field {
    margin-left: 135px;
    display: flex;
    flex-direction: column;
    .field-name {
      margin-top: 105px;
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: #0D1821;
    }
    .field-text {
      margin-top: 10px;
      font-size: 20px;
      line-height: 30px;
      color: #344966;
      margin-bottom: 50px;
    }
  }
  .poster__image {
    width: 521px;
    height: 462px;
    margin-top: -62px;
    background-image: url(${castle}); 
    background-repeat: no-repeat;
  }
}
.button {
  margin-top: 10px;
  max-width: 230px;
  width: 100%;
}
`;

export default AuthorizePosterWrapper