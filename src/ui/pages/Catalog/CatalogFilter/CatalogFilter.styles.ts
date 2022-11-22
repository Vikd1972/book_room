import styled, { css } from 'styled-components';

export interface IPicture {
  filtertBy: string;
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
  letter-spacing: 0.75px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-repeat: no-repeat;
  padding: 10px 15px 0 15px;
  cursor: pointer;
  @media (max-width: 1440px) {
    margin-left: 0;
    padding: 10px 15px 0 15px;
    width: 225px;
    height: 38px;
  }
  @media (max-width: 834px) {
    margin-top: 20px;
    padding: 10px 15px 0 15px;
    width: 275px;
    height: 38px;
  }
}
.filter-wrapper{
  position: relative;
}
.genre img {
  ${(props) => {
    if (props.filtertBy === 'genres') {
      return css`
          transform: rotate(90deg);
          `;
    }
  }};
}
.price img {
  ${(props) => {
    if (props.filtertBy === 'price') {
      return css`
          transform: rotate(90deg);
          `;
    }
  }};
}
.sort {
  background-color: white;
}
.sort img {
  ${(props) => {
    if (props.filtertBy === 'sort') {
      return css`
          transform: rotate(90deg);
          `;
    }
  }};
}
`;

export default СatalogFilterWrapper;
