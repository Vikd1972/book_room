import styled, { css } from 'styled-components';

interface IValid {
  isValid: boolean | undefined;
  isActive: boolean | undefined;
}

const InputTwoLineWrapper = styled.div<IValid>`
margin-top: 10px;
margin-top: 20px;
width: 100%;
height: 64px;
border-radius: ${({ theme }) => theme.borderRadius};
color: #344966;
display: flex;
flex-direction: row;
background-repeat: no-repeat;
  ${(props) => {
    if (!props.isActive) {
      return css`
        background-color: ${({ theme }) => theme.backrground};
        border: 2px solid ${({ theme }) => theme.backrground};
        `;
    }
    if (props.isValid) {
      return css`
        background-color: #FFF2F7;
        border: 2px solid #ED2E7E;
        `;
    }
    return css`
      background-color: #F3FDFA;
      border: 2px solid #00BA88;
        `;
  }}
.input-icon {
  padding: 0 24px;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-icon img {
  width: 24px;
  height: 22px;
}
.input-field {
  display: flex;
  flex-direction: column;
}
.name {
  margin-top: 6px;
  font-size: 14px;
  line-height: 24px;
}
.value {
  font-size: 16px;
  line-height: 28px;
}
input {
  font-size: 16px;
  line-height: 28px;
  background-color: transparent;
  border: none;
  outline: none;
}
.user__info-password {
  margin-top: 40px;
}
.error {
  color: #ff0000;
}
`;

export default InputTwoLineWrapper;
