import styled, { css } from 'styled-components';

interface IDisable {
  isDisabled: boolean;
}

const ButtonWrapper = styled.button<IDisable>`  
background-color: ${({ theme }) => theme.button.backrground};
font-size: ${({ theme }) => theme.button.fontSize};
font-weight: ${({ theme }) => theme.button.fontWeight};
line-height: ${({ theme }) => theme.button.fontHeight};
border-radius: ${({ theme }) => theme.borderRadius};
padding: ${({ theme }) => theme.button.padding};
color: ${({ theme }) => theme.button.fontColor};
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
