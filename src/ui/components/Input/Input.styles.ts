import styled, { css } from 'styled-components';

interface IValid {
  isValid: boolean | undefined;
  isActive: boolean | undefined;
}

const InputWrapper = styled.div<IValid>`
position: relative;
margin-top: 10px;
width: 100%;
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
  padding: 19px 24px;
  height: 100%;
  z-index: 1;
  display: flex;
  @media (max-width: 834px) {
    padding: 13px 13px;
  }
}
.input-icon img {
  width: 24px;
  height: 22px;
}
.input-field {
  display: flex;
  flex-direction: column;
  @media (max-width: 834px) {
    height: 54px;
  }
}
.title {
  position: absolute;
  top: 8px;
  color: #B9BAC4;
  padding: 7px 20px 10px 0;
  background-color: #F0F4EF;
  @media (max-width: 834px) {
    top: 5px;
    padding-top: 5px;
  }
}
.name {
  margin-top: 6px;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis; 
  @media (max-width: 834px) {
    margin-top: 0;
    font-size: 12px;
  }
}
.value {
  font-size: 16px;
  line-height: 28px;
  @media (max-width: 834px) {
    font-size: 14px;
  }
}
input {
  font-size: 16px;
  line-height: 28px;
  background-color: transparent;
  border: none;
  outline: none;
  @media (max-width: 834px) {
    font-size: 14px;
  }
}
.error {
  color: #ff0000;
}
`;

export default InputWrapper;
