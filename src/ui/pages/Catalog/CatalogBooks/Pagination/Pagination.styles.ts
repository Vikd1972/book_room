import styled from 'styled-components';

import left from '../../../../assets/picture/arrow_left.png';
import right from '../../../../assets/picture/arrow_right.png';
import page from '../../../../assets/picture/page.png';
import active from '../../../../assets/picture/active.png';

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
  background: none;
}
.pages {
  display: flex;
  flex-direction: row;
}
.page {
  width: 15px;
  height: 15px;  
  margin: 0 20px 0 20px;
  background-image: url(${page});
  cursor: pointer;
  background-repeat: no-repeat;
}
.active {
  margin: 0 20px 0 20px;
  background-image: url(${active});
  background-repeat: no-repeat;
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
