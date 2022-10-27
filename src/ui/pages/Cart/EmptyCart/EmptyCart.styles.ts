import styled from 'styled-components'

import book from '../../../assets/picture/books2.png'

const EmptyCartWrapper = styled.div`
max-width: 580px;
width: 100%;
height: 280px;
margin-left: 108px;
padding-left: 600px;
margin-top: 118px;
font-size: 40px;
background-image: url(${book});
background-position: 20px 20px;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
h1 {
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #0D1821;
  margin-bottom: 0;
}
p {
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #344966;
  margin-top: 20px;
}
.button {
  width: 219px;
}
`;

export default EmptyCartWrapper