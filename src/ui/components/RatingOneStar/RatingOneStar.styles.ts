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
}
`;

export default RatingOneStarWrapper;
