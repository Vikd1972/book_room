import styled from 'styled-components';

import checked from '../../../../assets/picture/radio_checked.png';
import unchecked from '../../../../assets/picture/radio_unchecked.png';

const ChoiceOfGenreWrapper = styled.div`
position: absolute;
top: 50px;
left: 20px;
width: 275px;
height: auto;
margin-top: 20px;
background-color: ${({ theme }) => theme.backrground};
border-radius: ${({ theme }) => theme.borderRadius};
z-index: 999;
padding: 10px 15px 5px 15px;
.checkbox-item {
  display: block;
  line-height: 37px;
  user-select: none;
  position: relative;
  cursor: pointer;
}
.checkbox-item input[type=checkbox] {
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
  padding: 15px 0 15px 0;
}
.name-item {
  display: inline-block;
  position: relative; 
  padding: 0 0 0 35px;
  color : #344966;
  font-size: 16px;
  font-weight: 500;
  line-height: 28px;  
}
.name-item:before {
  content: "";
  display: inline-block;
  width: 25px;
  height: 25px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${unchecked});
  background-repeat: no-repeat;
} 
.checkbox-item input[type=checkbox]:checked + span:before {
  background-image: url(${checked});
}
`;

export default ChoiceOfGenreWrapper;
