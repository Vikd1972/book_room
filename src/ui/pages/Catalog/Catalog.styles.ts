import styled from 'styled-components';

import books from '../../assets/picture/books.png';

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
@media (max-width: 834px) {
  max-width: 290px;
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
    background-size: 361px 218px;
    background-position: 0px 70px;
    background-repeat: no-repeat;
    max-width: 751px;
    width: 100%;
    height: auto;
    padding: 0 14px 0 40px;    
  }
  @media (max-width: 834px) {
    background-size: 80%;
    background-position: 50px 20px;
    flex-direction: column;
    max-width: 256px;
    width: 100%;
    height: auto;
    padding-left: 20px;
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
      @media (max-width: 1440px) {
        margin-top: 46px;
        font-size: 32px;
        line-height: 48px;
      }
      @media (max-width: 834px) {
        margin-top: 20px;
        font-size: 18px;
        line-height: 27px;
      }
    }
    &_text {
      margin: 0;
      font-size: 20px;
      line-height: 30px;
      color: #344966;
      @media (max-width: 1440px) {
        font-size: 16px;
        line-height: 24px;
      }
      @media (max-width: 834px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  .poster__image {
    width: 406px;
    height: 400px;
    @media (max-width: 1440px) {
      width: 328px;
      height: 364px;
      margin-top: -75px;
    }
    @media (max-width: 834px) {
      width: 253px;
      height: 282px;
      margin-top: 56px;
    }
  }
  .poster__image img {
    width: 406px;
    height: 400px;
    @media (max-width: 1440px) {
      width: 328px;
      height: 364px;
    }
    @media (max-width: 834px) {
      width: 253px;
      height: 282px;
    }
  }
}
.button {
  margin-top: 50px;
  width: 230px;
  @media (max-width: 1440px) {
   margin-top: 40px;
  }
  @media (max-width: 1440px) {
   margin-top: 20px;
   width: 200px;
  }
}
`;

export default СatalogWrapper;
