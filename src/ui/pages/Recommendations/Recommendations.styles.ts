import styled from 'styled-components';

const RecommendationsWrapper = styled.div`
width: 1300px;
margin-top: 110px;
display: flex;
flex-direction: column;
.title {
  margin-left: 10px;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #0D1821;
}
.books {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
`;

export default RecommendationsWrapper;
