import styled from 'styled-components'

import star1 from '../../../../utils/picture/star1.png'

const BookWrapper = styled.div`
margin-top: 50px;
max-width: 1280px;
width: 100%;
height: auto;
.cover-container {
  width: 100%;
  height: 100%;
}
.cover-container img {
  border-radius: 16px;
  width: 305px;
  height: 448px;
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
    height: 26px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .star {
      width: 24px;
      height: 24px;
      background-image: url(${star1});
      background-repeat: no-repeat;
    }
  }
  .rating-value {
    width: 25px;
    height: 25px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #B9BAC3;
  }
}
.button {
  margin-top: 32px;
  width: 305px;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #F0F4EF;
}
`;

export default BookWrapper