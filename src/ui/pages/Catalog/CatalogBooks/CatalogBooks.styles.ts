import styled from 'styled-components';

const СatalogBooksWrapper = styled.div`
width: 1300px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media (max-width: 1440px) {
  width: 828px;
}
@media (max-width: 834px) {
  width: 310px;
}
`;

export default СatalogBooksWrapper;
