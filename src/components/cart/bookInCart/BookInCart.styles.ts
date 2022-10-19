import styled from 'styled-components'

const BookInCartWrapper = styled.div`
max-width: 1280px;
width: 100%;
/* margin-top: 20px; */
display: flex;
flex-direction: row;
padding: 40px 0 40px 0;
border-bottom: 1px solid #D6D8E7;
.cover-container {
  width: auto;
  height: 100%;
}
.cover-container img {
  border-radius: 16px;
  width: 197px;
  height: 287px;
}
.buy-info {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  color: #0D1821;
  font-weight: 500;
}
.name {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  color: #0D1821;
  margin: 0;
}
.author{
  font-size: 24px;
  line-height: 36px;
  /* font-weight: 500; */
  margin: 0;
}
.quantity {
  margin-top: 50px;
}
.price {
  font-size: 36px;
  line-height: 54px;
  margin: 50px 0 0 0;
}
`;

export default BookInCartWrapper