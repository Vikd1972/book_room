import styled from 'styled-components'

import left from '../../../../utils/picture/arrow_left.png'
import right from '../../../../utils/picture/arrow_right.png'

const PaginationWrapper = styled.div`  
margin-top: 78px;
width: 268px;
height: 24px;
display: flex;
flex-direction: row;
.through {
  width: 10px;
  height: 17px;
  cursor: pointer;
}
.left {
  margin-right: 60px;
  background-image: url(${left});
  background-repeat: no-repeat;
}
.right {
  margin-left: 60px;
    background-image: url(${right});
  background-repeat: no-repeat;
}
`;

export default PaginationWrapper;
