import styled from 'styled-components';

import fairy from '../../assets/picture/fairy.png';
import fairySmall from '../../assets/picture/fairy1.png';

const AuthorizePosterWrapper = styled.div`
margin-top: 130px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
@media (max-width: 1440px) {
  margin-top: 87px;
}
@media (max-width: 834px) {
  margin-top: 20px;
}
.poster {
  background-color: ${({ theme }) => theme.backrground};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-image: url(${fairy}); 
  background-repeat: no-repeat;
  background-position: 824px ;
  padding: 0 98px 0 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1440px) {
    background-image: url(${fairySmall}); 
    background-position: 490px -40px;
    background-size: 40%;
    padding: 55px 0 0 0;
    max-width: 805px;
    width: 100%;
    justify-content: start;
  }
  @media (max-width: 834px) {
    flex-direction: column;
    max-width: 290px;
    padding: 20px 0 0 0;
    background-position: 65px -50px;
    background-size: 80%;
  }
  .poster__image {
    width: 521px;
    height: 462px;
    margin-top: -62px;
    @media (max-width: 1440px) {
      width: 389px;
      height: 345px;
      margin-top: 0;
    }  
    @media (max-width: 834px) {
      order: 1;
      width: 282px;
      height: 250px;
      margin-top: 78px;
    }  
  }
  .poster__image img {
    width: 100%;
    height: 100%;
    @media (max-width: 1440px) {
      width: 389px;
      height: 345px;
    } 
    @media (max-width: 834px) {
      width: 282px;
      height: 250px;
    } 
  }
  .poster__field {
    margin-left: 135px;
    display: flex;
    flex-direction: column;
    @media (max-width: 1440px) {
      margin-left: 21px;
    } 
    &-name {
      margin-top: 80px;
      font-size: 40px;
      line-height: 60px;
      font-weight: 700;
      color: #0D1821;
      @media (max-width: 1440px) {
        margin-top: 30px;
        font-size: 32px;
        line-height: 48px;
      } 
      @media (max-width: 834px) {
        margin-top: 0;
        font-size: 18px;
        line-height: 27px;
      } 
    }
    .text-container {
      width: 420px;
      @media (max-width: 1440px) {
        width: 395px;
      } 
      @media (max-width: 834px) {
        width: 250px;
      } 
    }
    &-text {
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
    .button {
      margin-top: 60px;
      max-width: 230px;
      width: 100%;
      @media (max-width: 1440px) {
        margin-top: 40px;
      }        
      @media (max-width: 1440px) {
        margin-top: 20px;
      } 
    }
}
}
`;

export default AuthorizePosterWrapper;
