import styled from 'styled-components';

const DetailBookWrapper = styled.div`
margin-top: 60px;
max-width: 1280px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
@media (max-width: 1440px) {
  margin-top: 100px;
  max-width: 805px;
}
@media (max-width: 834px) {
  margin-top: 40px;
  max-width: 290px;
  flex-wrap: wrap;
}
.cover-container {
  width: 100%;
  height: 100%;
}
.cover-container img {
  border-radius: 16px;
  width: 522px;
  height: 779px;
  @media (max-width: 1440px) {
    width: 391px;
    height: 584px;
  }
  @media (max-width: 834px) {
    width: 135px;
    height: 202px;
  }
}
.info {
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1440px) {
    margin-left: 21px;
  }
  @media (max-width: 834px) {
    margin-left: 0;
    align-items: flex-end;
    margin-top: -210px;
  }
}
.info-title {
  @media (max-width: 834px) {
    width: 135px;
  }
}
.name {
  font-size: 40px;
  line-height: 50px;
  font-weight: 700;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    width: 135px;
    height: 40px;
    font-size: 18px;
    line-height: 20px;
  }
}
.author {
  font-size: 24px;
  line-height: 36px;
  margin: 0;
  @media (max-width: 1440px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 834px) {
    margin-top: 14px;
    width: 135px;
    font-size: 12px;
    line-height: 18px;
  }
}
.rating {
  margin-top: 30px;
  line-height: 24px;
  color: #B9BAC4;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1440px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 834px) {
    margin: 10px 0 0 -5px;
  }
  .rating-my {
    margin-left: 70px;
    display: flex;
    flex-direction: row;
    width: 396px;
    align-items: center;
    @media (max-width: 1440px) {
      margin: 8px 0 0 0;
    }
    @media (max-width: 834px) {
      flex-direction: column;
      width: 135px;
      align-items: flex-start;
    }
    & .MuiRating-decimal { 
      width: 23px;
      padding: 0 20px 0 0;
      @media (max-width: 1440px) {
        width: 20px;
        padding: 0 18px 0 0;
      }
      @media (max-width: 834px) {
        padding: 0 7px 0 0;
      }
    }
    & .MuiRating-root {
      @media (max-width: 834px) {
        font-size: 1.5rem;
      }
    }
    p {
      padding-top: 6px;
      margin: 0 0 0 10px;
      white-space: nowrap;
      @media (max-width: 1440px) {
        padding-top: 3px;
      }
      @media (max-width: 834px) {
        font-size: 12px;
        line-height: 18px;
        margin: 0 0 0 5px;
      }
    }
    .rating-arrow {
      padding-top: 6px;
      margin-left: 30px;
      @media (max-width: 1440px) {
        padding-top: 10px;
      }
      @media (max-width: 834px) {
        display: none;
      }
    }
  }
}
.description {
  font-size: 16px;
  line-height: 24px;
  color: #344966;
  margin: 30px 0 0 0;
  @media (max-width: 1440px) {
    font-size: 14px;
    line-height: 21px;
    width: 392px;
  }
  @media (max-width: 834px) {
    margin-top: 50px;
    width: 290px;
  }
  h1 {
    color: #0D1821;
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 10px 0;
    font-weight: 500;
    @media (max-width: 1440px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
}
.purchase {
  margin-top: 74px;
  display: flex;
  flex-direction: row;
  color: #344966;
  @media (max-width: 1440px) {
    margin-top: 50px;
    width: 396px;
    justify-content: space-between;
  }
  @media (max-width: 834px) {
    margin-top: 30px;
    width: 290px;
    justify-content: space-between;
    font-size: 14px;
    line-height: 21px;
  }
}
.purchase div {
  @media (max-width: 834px) {
    width: 135px;
  }
}
.button {
  margin-top: 14px;
  margin-right: 80px;
  width: 240px;
  font-size: 20px;
  @media (max-width: 1440px) {
    margin-right: 0;
    width: 188px;
  }
  @media (max-width: 834px) {
    width: 135px;
    font-size: 12px;
    line-height: 18px ;
  }
}
.in-cart {
  background-color: #ffffff;
  color: #0D1821;
  border: 1px solid #344966;
  padding: 9px 0;
}
`;

export default DetailBookWrapper;
