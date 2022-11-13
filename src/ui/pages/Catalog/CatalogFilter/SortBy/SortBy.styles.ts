import styled from 'styled-components';

const SortByWrapper = styled.div`
position: absolute;
top: 50px;
left: 20px;
width: 180px;
height: auto;
padding: 5px 10px 5px 15px;
margin-top: 20px;
background-color: ${({ theme }) => theme.backrground};
border-radius: ${({ theme }) => theme.borderRadius};
z-index: 999;
@media (max-width: 1440px) {
  top: 40px;
  left: 0px;
  width: 230px;
}
@media (max-width: 1440px) {
  top: 55px;
  left: 0px;
  width: 265px;
}
.sorting {
  margin: 6px 0;
  color: #B9BAC3;
  cursor: pointer;
  @media (max-width: 1440px) {
    font-size: 14px;
    margin: 13px 0;
  }
}
.active{
  color: #344966;
}
`;

export default SortByWrapper;
