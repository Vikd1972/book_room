import styled from 'styled-components'

import books from '../../Utils/picture/books.png'
import woman from '../../Utils/picture/woman.png'

const СatalogFilterWrapper = styled.div`
margin-top: 110px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
/* font-family: 'Poppins', sans-serif; */
.name {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
}
.filtering {
  display: flex;
  flex-direction: row;
}
.filter {
  width: 196px;
  height: 38px;
  font-size: 18px;
  line-height: 28px;
  margin-left: 20px;
  background-color: #F0F4EF;
  border-radius: 16px;
  padding-top: 10px;
  padding-left: 15px;
  letter-spacing: 0.75px;
  cursor: pointer;
}
`;

export default СatalogFilterWrapper