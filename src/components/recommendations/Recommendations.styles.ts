import styled from 'styled-components'

const RecommendationsWrapper = styled.div`
max-width: 1280px;
width: 100%;
margin-top: 110px;
display: flex;
flex-direction: column;
.title {
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: #0D1821;
}
.books {
  max-width: 1280px;
width: 100%;
display: flex;
flex-wrap: wrap;
}
div {
  width: 25%;
  height: auto;
}
`;

export default RecommendationsWrapper