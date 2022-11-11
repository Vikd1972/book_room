import styled from 'styled-components';

import books from '../../assets/picture/books.png';
import woman from '../../assets/picture/woman.png';

const СatalogWrapper = styled.div`
margin-top: 40px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1440px) {
  max-width: 804px;
}
.poster {
  max-width: 1074px;
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.backrground};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: url(${books}); 
  background-repeat: no-repeat;
  background-position: 0px 135px;
  padding: 0 98px 0 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1440px) {
  max-width: 804px;
}
  .poster__field {
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
  }
  .poster__image {
    width: 406px;
    height: 400px;
    background-image: url(${woman}); 
    background-repeat: no-repeat;
  }
}
.button {
  margin-top: 50px;
  width: 230px;
}
`;

export default СatalogWrapper;
