import styled from 'styled-components'
import { css } from 'styled-components';

import checked from '../../../utils/picture/radio_checked.png'
import unchecked from '../../../utils/picture/radio_unchecked.png'
import field from '../../../utils/picture/arrow_up_field.png'


const ChoiceOfGenreWrapper = styled.div`
position: absolute;
top: 50px;
left: 20px;
width: 275px;
height: auto;
margin-top: 20px;
background-color: #F0F4EF;
border-radius: 16px;
.arrow {
  position: relative;
  margin-top: -10px;
  margin-left: -20px;
  background-image: url(${field});
  background-repeat: no-repeat;
  background-position: 50px 0px;
  height: 20px;
}
.checkbox {
  padding: 5px 15px 0 15px;
}
p {
  margin: 0;
}
.checkbox-item {
  display: block;
  line-height: 37px;
	cursor: pointer;
	user-select: none;
	position: relative;
  /* margin-bottom: -15px; */
}
.name-item {
  padding: 10px 0 10px 0;
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
.checkbox-item span {
  display: inline-block;
	position: relative; 
	padding: 0 0 0 35px;
  color : #344966;
  font-size: 16px;
  font-weight: 500;
	line-height: 28px;  
}
.checkbox-item span:before {
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

export default ChoiceOfGenreWrapper