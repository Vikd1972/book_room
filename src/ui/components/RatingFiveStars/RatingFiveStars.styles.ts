import styled from 'styled-components';

const RatingFiveStarsWrapper = styled.div`
max-width: 200px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-between;
.star-container {
  cursor: pointer;
}
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
& .MuiRating-icon {
  padding: 0 6px 0 6px;
}
`;

export default RatingFiveStarsWrapper;
