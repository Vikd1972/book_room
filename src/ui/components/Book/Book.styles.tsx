import styled from 'styled-components';

import star from '../../assets/picture/star1.png';

const BookWrapper = styled.div`
margin-top: 50px;
max-width: 1280px;
width: 100%;
height: auto;
z-index: 1;
.cover-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.cover-container img {
  border-radius: 16px;
  width: 305px;
  height: 448px;
}
.favorites {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
}
.favorites img {
  width: 48px;
  height: 48px;
}
.name {
  margin-top: 25px;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #344966;
  width: 305px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}
.author {
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #B9BAC3;
  width: 305px;
  white-space: nowrap;
  overflow: hidden;
}
.rating {
  width: 305px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .star-container {
    width: 250px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & .MuiRating-icon {
      padding-right: 15px;
    }
  }
  .rating-value {
    width: 25px;
    padding-top: 8px;
    height: 25px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #B9BAC3;
  }
}
.button {
  margin-top: 32px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #F0F4EF;
}
.in-cart {
  background-color: #ffffff;
  color: #0D1821;
  border: 1px solid #344966;
  padding: 9px 0 9px 0;
}
`;

export default BookWrapper;
