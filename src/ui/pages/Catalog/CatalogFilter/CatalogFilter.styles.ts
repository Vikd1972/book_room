import styled, { css } from 'styled-components';

import arrow_right from '../../../assets/picture/arrow_right.png';
import arrow_bottom from '../../../assets/picture/arrow_bottom.png';

export interface IPicture {
  genre?: boolean;
  price?: boolean;
  sort?: boolean;
}

const СatalogFilterWrapper = styled.div<IPicture>`
margin-top: 110px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 1440px) {
  margin-top: 54px;
  flex-direction: column;
  max-width: 804px;
  width: 100%;
  height: auto;
}
@media (max-width: 834px) {
  margin-top: 20px;
  max-width: 290px;
}
.title {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  @media (max-width: 1440px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (max-width: 834px) {
    font-size: 18px;
    line-height: 27px;
  }
}
.filter-bank {
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  @media (max-width: 1440px) {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 834px) {
    margin-top: -7px;
    flex-direction: column;
  }
}
.filter {
  width: 196px;
  height: 38px;
  font-size: 18px;
  line-height: 28px;
  margin-left: 20px;
  background-color: ${({ theme }) => theme.backrground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 10px 0 0 15px;
  letter-spacing: 0.75px;
  background-repeat: no-repeat;
  cursor: pointer;
  @media (max-width: 1440px) {
    margin-left: 0;
    padding: 10px 0 0 15px;
    width: 240px;
    height: 38px;
  }
  @media (max-width: 834px) {
    margin-top: 20px;
    padding: 10px 0 0 15px;
    width: 275px;
    height: 38px;
  }
}
.filter-wrapper{
  position: relative;
}
.genre {
  ${(props) => {
    if (props.genre) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          @media (max-width: 1440px) {
            background-position: 225px 20px;
          }
          @media (max-width: 834px) {
            background-position: 263px 20px;
          }
          `;
    }
    return css`
        background-image: url(${arrow_right});
        background-position: 185px 17px;
        @media (max-width: 1440px) {
          background-position: 228px 17px;
        }
        @media (max-width: 834px) {
          background-position: 268px 17px;
        }
    `;
  }};
}
.price {
  ${(props) => {
    if (props.price) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          @media (max-width: 1440px) {
            background-position: 225px 20px;
          }
          @media (max-width: 834px) {
            background-position: 263px 20px;
          }
          `;
    }
    return css`
        background-image: url(${arrow_right});
        background-position: 185px 17px;
        @media (max-width: 1440px) {
          background-position: 228px 17px;
        }
        @media (max-width: 834px) {
          background-position: 268px 17px;
        }
    `;
  }};
}
.sort {
  ${(props) => {
    if (props.sort) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          @media (max-width: 1440px) {
            background-position: 225px 20px;
          }
          @media (max-width: 834px) {
            background-position: 263px 20px;
          }
          `;
    }
    return css`
        background-image: url(${arrow_right});
        background-position: 185px 17px;
        @media (max-width: 1440px) {
          background-position: 228px 17px;
        }
        @media (max-width: 834px) {
          background-position: 268px 17px;
        }
    `;
  }};
  background-color: white;
}
`;

export default СatalogFilterWrapper;
