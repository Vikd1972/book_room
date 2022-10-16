import styled from 'styled-components'

const DetailBookWrapper = styled.div`
margin-top: 60px;
max-width: 1280px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
.cover-container {
  width: 100%;
  height: 100%;
}
.cover-container img {
  border-radius: 16px;
  width: 522px;
  height: 779px;
}
.info {
  font-family: 'Poppins', sans-serif;
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.name {
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
}
.purchase {
  display: flex;
  flex-direction: row;
}
.button {
  margin-top: 32px;
  margin-right: 80px;
  width: 240px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #F0F4EF;
}
`;

export default DetailBookWrapper