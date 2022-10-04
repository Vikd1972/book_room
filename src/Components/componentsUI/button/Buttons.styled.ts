import styled from 'styled-components'
import { css } from 'styled-components';

export interface Width {
  width?: string;
}

const ButtonLinkStyle = styled.div<Width>`  
height: 34px;
background-color: #344966;
font-size: 16px;
font-weight: 500;
border-radius: 16px;
text-align: center;
padding-top: 10px;
div {
  color: #F0F4EF;
  text-decoration: none;
}
&:hover{
  cursor: pointer;
  background-color: #0D1821;
} 
${(props) => {
    return css`
          width: ${props.width};
        `;
  }}
`;

const ButtonSubmitStyle = styled.button<Width>`  
background-color: #344966;
font-size: 16px;
font-weight: 500;
border-radius: 16px;
text-align: center;
padding-top: 10px;
div {
  height: 30px;
  color: #F0F4EF;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}
&:hover{
  cursor: pointer;
  background-color: #0D1821;
} 
${(props) => {
    return css`
          width: ${props.width};
        `;
  }}
`;

export { ButtonLinkStyle, ButtonSubmitStyle };
