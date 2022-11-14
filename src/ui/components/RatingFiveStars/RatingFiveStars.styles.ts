import styled from 'styled-components';

const RatingFiveStarsWrapper = styled.div`
max-width: 200px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 1440px) {
  width: 196px;
}
.star-container {
  cursor: pointer;
}
.star-container img {
  width: 28px;
  height: 28px;
  @media (max-width: 1440px) {
    width: 18px;
    height: 18px;
  }
}
& .MuiRating-iconFilled {
  color: #BFCC94;
}
& .MuiRating-iconHover {
  color: #BFCC94;
}
& .MuiRating-decimal {
  @media (max-width: 1440px) {
    width: 20px;
    height: auto;
  }
  @media (max-width: 834px) {
    width: 18px;
    height: auto;
  }
}
`;

export default RatingFiveStarsWrapper;
