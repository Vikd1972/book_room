import styled from 'styled-components';

const BookInCartWrapper = styled.div`
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
padding: 40px 0;
border-bottom: 1px solid #D6D8E7;
@media (max-width: 1440px) {
  width: 805px;
  padding: 30px 0;
}
@media (max-width: 834px) {
  width: 290px;
}
.cover-container {
  width: auto;
  height: 100%;
  @media (max-width: 1440px) {
    width: 255px;
    height: 375px;
  }
  @media (max-width: 834px) {
    width: 135px;
    height: 202px;
  }
}
.cover-container img {
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 197px;
  height: 287px;
  @media (max-width: 1440px) {
    width: 255px;
    height: 375px;
  }
  @media (max-width: 834px) {
    width: 135px;
    height: 202px;
  }
}
.purchase-info {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: #0D1821;
  font-weight: 500;
  @media (max-width: 1440px) {
    margin-top: 38px;
    width: 530px;
  }
  @media (max-width: 834px) {
    margin: 0 0 0 20px;
    width: 135px;
  }
}
.wrapper-name {
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1440px) {
    height: 48px;
  }
  @media (max-width: 834px) {
    height: 40px;
  }
};
.name {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  color: #0D1821;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 20px;
  }
}
.author{
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 834px) {
    font-size: 12px;
    line-height: 18px;
  }
}
.price {
  font-size: 36px;
  line-height: 54px;
  margin-top: 50px;
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
    margin-top: 44px;
  }
}
`;

export default BookInCartWrapper;
