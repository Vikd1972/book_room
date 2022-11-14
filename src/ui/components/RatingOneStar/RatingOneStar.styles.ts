import styled from 'styled-components';

const RatingOneStarWrapper = styled.div`
max-width: 30px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
.star-container img {
  width: 28px;
  height: 28px;
}
& .MuiRating-iconFilled {
  color: #BFCC94;
}
& .MuiRating-iconHover {
  color: #BFCC94;
}
p {
  margin: 0;
  padding: 4px 0 0 5px;
  @media (max-width: 834px) {
    font-size: 13px;
    line-height: 20px;
    padding: 2px 0 0 5px;
  }
}
& .MuiRating-root {
  @media (max-width: 834px) {
    font-size: 1.5rem;
  }
}
`;

export default RatingOneStarWrapper;
