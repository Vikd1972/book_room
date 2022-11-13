import styled from 'styled-components';

const PaginationWrapper = styled.div`  
margin-top: 78px;
height: 16px;
display: flex;
flex-direction: row;
align-items: center;
@media (max-width: 1440px) {
  margin-top: 59px;
}
@media (max-width: 834px) {
  margin-top: 48px;
}
.pagination {
  width: 10px;
  height: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pages {
  margin: 0 40px;
  display: flex;
  flex-direction: row;
}
.page {
  width: 10px;
  height: 10px; 
  border-radius: 7px;
  border: 2px solid #0D1821;
  margin: 0 20px 0 20px;
  cursor: pointer;
}
.active {
background-color: #0D1821;
}
`;

export default PaginationWrapper;
