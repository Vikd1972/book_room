import styled from 'styled-components';

const FavoritesWrapper = styled.div`
width: 1300px;
margin-top: 110px;
display: flex;
flex-direction: column;
@media (max-width: 1440px) {
  margin-top: 90px;
  width: 828px;
}
@media (max-width: 834px) {
  margin-top: 60px;
  width: 310px;
}
.title {
  margin-left: 10px;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #0D1821;
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
  }
}
.books {
width: 100%;
display: flex;
flex-wrap: wrap;
}
`;

export default FavoritesWrapper;
