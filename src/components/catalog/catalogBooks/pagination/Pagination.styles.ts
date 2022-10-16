import styled from 'styled-components'

import left from '../../../../utils/picture/arrow_left.png'
import right from '../../../../utils/picture/arrow_right.png'

const PaginationWrapper = styled.div`  
margin-top: 78px;
height: 24px;
display: flex;
flex-direction: row;
.through {
  width: 10px;
  height: 17px;
  cursor: pointer;
  border: none;
}
#pages {
  display: flex;
  flex-direction: row;
}
.page {
  width: 14px;
  height: 14px;
  margin: 0 20px 0 20px;
  border-radius: 8px;
  border: 2px solid #0D1821;
  /* background-color: #0D1821; */
}
.active {
  background-color: #0D1821;
}
.left {
  margin-right: 40px;
  background-image: url(${left});
  background-repeat: no-repeat;
}
.right {
  margin-left: 40px;
  background-image: url(${right});
  background-repeat: no-repeat;
}
`;

export default PaginationWrapper;
