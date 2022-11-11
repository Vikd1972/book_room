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
.sorting {
  margin: 6px 0;
  cursor: pointer;
}
.active{
  color: #344966;
}
`;

export default SortByWrapper;
