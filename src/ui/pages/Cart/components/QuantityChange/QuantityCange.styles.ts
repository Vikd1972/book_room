import styled from 'styled-components';

import reduction from '../../../../assets/picture/reduction.png';
import addition from '../../../../assets/picture/addition.png';
import removal from '../../../../assets/picture/removal.png';

const QuantityCangeWrapper = styled.div`  
margin-top: 50px;
height: auto;
display: flex;
flex-direction: row;
.through {
  width: 33px;
  height: 33px;
  cursor: pointer;
  border: none;
  background: none;
}
#pages {
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
}
.page {
  width: 14px;
  height: 14px;
  margin: 0 20px 0 20px;
  border-radius: 8px;
  border: 2px solid #0D1821;
  cursor: pointer;
}
.active {
  background-color: #0D1821;
}
.reduction {
  margin-right: 14px;
  background-image: url(${reduction});
  background-repeat: no-repeat;
}
.addition {
  margin-left: 14px;
  background-image: url(${addition});
  background-repeat: no-repeat;
}
.removal {
  margin-left: 50px;
  background-image: url(${removal});
  background-repeat: no-repeat;
  background-position: center center;
}
`;

export default QuantityCangeWrapper;
