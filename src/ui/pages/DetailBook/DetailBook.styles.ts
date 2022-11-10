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
  display: flex;
  flex-direction: row;
  align-items: center;
  &-book {
    padding-top: 2px;
  }
  &-my {
    margin-left: 40px;
    display: flex;
    flex-direction: row;
    width: 396px;
    p {
      padding-top: 6px;
      margin: 0 0 0 10px;
      white-space: nowrap;
    }
    .rating-arrow {
      padding-top: 6px;
      margin-left: 40px;
    }
  }
}
.description {
  font-size: 16px;
  line-height: 24px;
  color: #344966;
  margin: 30px 0 0 0;
  h1 {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
    font-weight: 500;
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
