import styled from 'styled-components';

const BookWrapper = styled.div`
margin-top: 60px;
width: 305px;
padding: 0 10px;
height: auto;
.cover-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.cover-container img {
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
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
.marker {
  position: absolute;
  padding: 10px 0 10px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 10px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  left: 20px;
  bottom: 20px;
}
.is-new {
  width: 132px;
  background-color: #BFCC94;
  color: #0D1821;
}
.is-bestseller {
  width: 175px;
  background-color: #344966;
  color: #F0F4EF;
}
.name {
  width: 100%;
  margin: 25px 0 0 0;
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
  width: 100%;
  margin: 0;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #B9BAC3;
  width: 305px;
  white-space: nowrap;
  overflow: hidden;
}
.rating {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .rating__stars {
    height: auto;
    & .MuiRating-icon { 
      padding: 0;
    }
    & .MuiRating-decimal { 
      padding: 0 23px 0 0;
    }
  }
  .rating__value {
    width: auto;
    padding-top: 6px;
    height: auto;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #B9BAC3;
  }
}
.button {
  margin-top: 30px;
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
