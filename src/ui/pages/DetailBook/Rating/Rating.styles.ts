import styled from 'styled-components';

const RatingWrapper = styled.div`
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
`;

export default RatingWrapper;
