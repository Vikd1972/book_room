import styled from 'styled-components';

const EmptyCartWrapper = styled.div`
height: 280px;
margin: 118px 0 0 108px;
font-size: 40px;
display: flex;
flex-direction: row;
@media (max-width: 1440px) {
  margin: 100px 0 0 0;
}
@media (max-width: 834px) {
  margin: 49px 0 0 0;
  flex-direction: column;
  height: auto;
}
.container-image {
  @media (max-width: 1440px) {
    width: 350px;
    height: 212px;
  }
  @media (max-width: 834px) {
    order: 1;
    margin-top: 40px;
    width: 290px;
    height: 176px;;
  }
}
.container-image img {
  @media (max-width: 1440px) {
    width: 350px;
    height: 212px;
  }
  @media (max-width: 834px) {
    width: 290px;
    height: 176px;;
  }
}
.container-text {
  display: flex;
  flex-direction: column;
  margin-left: 109px;
  @media (max-width: 1440px) {
    margin-left: 62px;
  }
  @media (max-width: 834px) {
    margin: 0;
    width: 290px;
  }
}
.container-text div {
  width: 500px;
  margin-top: 20px;
  @media (max-width: 1440px) {
    width: 340px;
  }
  @media (max-width: 834px) {
    width: 270px;
  }
}
h1 {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  color: #0D1821;
  margin: 15px 0 0 0;
  white-space: nowrap;
  @media (max-width: 1440px) {
    margin: 0;
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
  }
}
p {
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  margin: 0;
  color: #344966;
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
   @media (max-width: 834px) {
    font-size: 12px;
    line-height: 18px;
  }
}
.button {
  margin-top: 70px;
  width: 219px;
  @media (max-width: 1440px) {
    margin-top: 50px;
  }
  @media (max-width: 834px) {
    margin-top: 30px;
    width: 100%;
  }
}
`;

export default EmptyCartWrapper;
