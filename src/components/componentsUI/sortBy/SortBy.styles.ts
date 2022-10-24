import styled from 'styled-components'
import { css } from 'styled-components';

import field from '../../../utils/picture/arrow_up_field.png'


const SortByWrapper = styled.div`
position: absolute;
top: 50px;
left: 20px;
width: 180px;
padding: 0 0 10px 15px;
height: auto;
margin-top: 20px;
background-color: #F0F4EF;
border-radius: 16px;
.arrow {
  position: relative;
  margin-top: -10px;
  margin-left: -50px;
  background-image: url(${field});
  background-repeat: no-repeat;
  background-position: 50px 0px;
  height: 20px;
}
.sorting {
  font-size: 16px;
  line-height: 28px;
  font-weight: 500;
  color: #B9BAC3;
  margin: 6px 0;
  cursor: pointer;
}
.active{
  color: #344966;
}

`;



export default SortByWrapper