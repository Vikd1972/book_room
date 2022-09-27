import styled from 'styled-components'

import books from '../picture/books.png'
import woman from '../picture/woman.png'

const Сatalogue = styled.div`
margin-top: 40px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
.poster {
  height: 400px;
  background-color: #F0F4EF;
  border-radius: 16px;
  background-image: url(${books});
  background-repeat: no-repeat;
  background-position: 0px 135px;
  padding: 0 98px 0 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .poster__field {
    display: flex;
    flex-direction: column;
    .field-name {
      margin-top: 80px;
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
    }
    .field-btn {
      margin-top: 50px;
      width: 230px;
      height: 44px;
      background-color: #344966;
      font-size: 16px;
      line-height: 24px;
      color: #F0F4EF;
      border-radius: 16px;
      text-align: center;
        font-family: 'Poppins', sans-serif;
      text-decoration: none;
    }
    .field-btn:hover{
      cursor: pointer;
      background-color: #0D1821;
    }
  }
  .poster__image {
    width: 406px;
    height: 400px;
    background-image: url(${woman});
    background-repeat: no-repeat;
  }
}
`;

export default Сatalogue