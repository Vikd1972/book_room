import styled from 'styled-components';

const BookWrapper = styled.div`
margin-top: 60px;
width: 305px;
padding: 0 10px;
height: auto;
@media (max-width: 1440px) {
  margin-top: 32px;
  width: 254px;
}
@media (max-width: 834px) {
  margin-top: 20px;
  width: 135px;
}
.cover-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.cover-container img {
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  height: 448px;
  @media (max-width: 1440px) {
    height: 372px;
  }
  @media (max-width: 834px) {
    height: 192px;
  }
}
.favorites {
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  @media (max-width: 834px) {
    top: 16px;
    left: 16px;
  }
}
.favorites img {
  width: 48px;
  height: 48px;
  @media (max-width: 834px) {
    width: 25px;
    height: 25px;
  }
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
  @media (max-width: 834px) {
    left: 10px;
    font-size: 10px;
    line-height: 10px;
  }
}
.is-new {
  width: 132px;
  background-color: #BFCC94;
  color: #0D1821;
  @media (max-width: 834px) {
    width: 113px;
  }
}
.is-bestseller {
  width: 175px;
  background-color: #344966;
  color: #F0F4EF;
  @media (max-width: 834px) {
    width: 113px;
  }
}
.name {
  width: 100%;
  margin: 25px 0 0 0;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #344966;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 834px) {
    margin: 10px 0 0 0;
    font-size: 14px;
    line-height: 21px;
  }
}
.author {
  width: 100%;
  margin: 0;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #B9BAC3;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 1440px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 834px) {
    margin: 0;
    font-size: 14px;
    line-height: 21px;
  }
}
.rating {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 834px) {
    width: 135px;
  }
  .rating__stars {
    height: auto;
    @media (max-width: 834px) {
      width: 105px;
    }
    & .MuiRating-icon { 
      padding: 0;
    }
    & .MuiRating-decimal { 
      padding: 0 23px 0 0;
      @media (max-width: 1440px) {
        padding: 0 20px 0 0;
      }
      @media (max-width: 834px) {
        padding: 0 3px 0 0;
      }
    }
    & .MuiRating-root {
      @media (max-width: 834px) {
        font-size: 1.3rem;
      }
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
    @media (max-width: 834px) {
      padding-top: 1px;
      font-size: 13px;
      line-height: 20px;
    }
  }
}
.purchase-button {
  margin-top: 30px;
  width: 100%;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: #F0F4EF;
  @media (max-width: 1440px) {
    font-size: 16px;
  }
  @media (max-width: 834px) {
    margin-top: 17px;
    font-size: 14px;
    padding: 3px 0;
  }
}
.in-cart {
  background-color: #ffffff;
  color: #0D1821;
  border: 1px solid #344966;
  padding: 9px 0;
  @media (max-width: 834px) {
    padding: 2px 0;
  }
}
`;

export default BookWrapper;
