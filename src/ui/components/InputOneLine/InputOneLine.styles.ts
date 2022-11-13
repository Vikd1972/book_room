import styled, { css } from 'styled-components';

interface IValid {
  isValid: boolean | undefined;
  isActive: boolean | undefined;
}

const InputOneLineWrapper = styled.div<IValid>`
margin-top: 20px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
@media (max-width: 1440px) {
  margin-top: 10px;
}
.input-field {
  flex-direction: row;
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
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
}
.input-icon {
  padding: 22px 24px;
  height: 100%;
  z-index: 1;
  display: flex;
  @media (max-width: 834px) {
    padding: 13px 14px;
  }
}
.input-icon img {
  width: 24px;
  height: 22px;
}
.input-width {
  width: 100%;
}
.input-width input {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.75px;
  width: 100%;
  height: 64px;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  @media (max-width: 834px) {
    height: 48px
  }
}
.input-title {
  font-size: 14px;
  line-height: 24px;
  color: #344966;
  margin: 10px 0 0 0;
}
.input-title p {
  margin: 0;
}
.error {
  color: #ff0000;
}`;

export default InputOneLineWrapper;
