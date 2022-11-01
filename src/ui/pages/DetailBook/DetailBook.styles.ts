import styled from 'styled-components';

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
  font-weight: 500;
}
.name {
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  margin: 0;
}
.author {
  font-size: 24px;
  line-height: 36px;
  margin: 0;
}
.rating {
  margin-top: 30px;
  font-size: 16px;
  line-height: 24px;
  color: #B9BAC4;
}
.description {
  font-size: 16px;
  line-height: 24px;
  color: #344966;
  margin: 30px 0 0 0;
  span {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }
}
.purchase {
  margin-top: 74px;
  display: flex;
  flex-direction: row;
  color: #344966;
}
.button {
  margin-top: 14px;
  margin-right: 80px;
  width: 240px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #F0F4EF;
}
`;

export default DetailBookWrapper;
