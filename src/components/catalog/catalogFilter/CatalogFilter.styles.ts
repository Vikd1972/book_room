import styled from 'styled-components'
import { css } from 'styled-components';

import arrow_right from '../../../utils/picture/arrow_right.png'
import arrow_bottom from '../../../utils/picture/arrow_bottom.png'
import checked from '../../../utils/picture/radio_checked.png'
import unchecked from '../../../utils/picture/radio_unchecked.png'
import field from '../../../utils/picture/arrow_up_field.png'

export interface Picture {
  genre?: boolean;
  price?: boolean;
  sort?: boolean;
}

const СatalogFilterWrapper = styled.div<Picture>`
margin-top: 110px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
.name {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
}
.filtering {
  display: flex;
  flex-direction: row;

}
.filter {
  width: 196px;
  height: 38px;
  font-size: 18px;
  line-height: 28px;
  margin-left: 20px;
  background-color: #F0F4EF;
  border-radius: 16px;
  padding-top: 10px;
  padding-left: 15px;
  letter-spacing: 0.75px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.filter-wrapper{
  position: relative;
}
.genre {
  ${(props) => {
    if (props.genre) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          `;
    } else {
      return css`
          background-image: url(${arrow_right});
          background-position: 185px 17px;
        `;
    }
}};
  .arrow {
    margin-top: 25px;
    background-image: url(${field});
    background-repeat: no-repeat;
    background-position: 10px 0px;
    height: 20px;
  }
  .genre__btn {
    margin-top: -5px;
    margin-left: -15px;
    width: 305px;
    height: auto;
    border-radius: 16px;
    background-color: #F0F4EF;
  }
  .custom-radio input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .custom-radio span {
    display: inline-flex;
    align-items: center;
    user-select: none;
    padding-top: 5px;   
      cursor: pointer; 
  }
  .custom-radio span::before {
    content: '';
    display: inline-block;
    background-image: url(${unchecked});
    background-repeat: no-repeat;
    width: 39px;
    height: 24px;
    margin-right: 10px;
    background-position: 15px;  
  }
  .custom-radio input:checked+span::before {
    background-image: url(${checked});
  }
}
.price {
  ${(props) => {
    if (props.price) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          `;
    } else {
      return css`
          background-image: url(${arrow_right});
          background-position: 185px 17px;
        `;
    }
  }};
  .price-box {
    margin-top: 30px;
    padding: 16px 0;
    width: 416px;
    height: 151px;
    border-radius: 16px;
    background-color: #F0F4EF; 
    color: #BFCC94;
    height: 12px;
    
  }
}
.sort {
    ${(props) => {
    if (props.sort) {
      return css`
          background-image: url(${arrow_bottom});
          background-position: 185px 20px;
          `;
    } else {
      return css`
          background-image: url(${arrow_right});
          background-position: 185px 17px;
        `;
    }
  }};
  background-color: white;
}

`;

export default СatalogFilterWrapper