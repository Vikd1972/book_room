import styled from 'styled-components'
import { css } from 'styled-components';

interface Disable {
  isDisabled: boolean
}

const ButtonWrapper = styled.button<Disable>`  
background-color: #344966;
font-size: 16px;
font-weight: 500;
border-radius: 16px;
padding: 10px 0 10px 0;
color: #F0F4EF;
font-family: 'Poppins', sans-serif;
border: none;
&:hover{
  cursor: pointer;
  background-color: #0D1821;
} 

${(props) => {
  if (props.isDisabled) {
    return css`
      background-color: #B9BAC3;
      &:hover{
        cursor: auto;
        background-color: #B9BAC3;
      } 
    `;
  }
}}
`;

export { ButtonWrapper };
