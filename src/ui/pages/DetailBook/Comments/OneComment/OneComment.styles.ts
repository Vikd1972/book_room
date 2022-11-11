import styled from 'styled-components';

const OneCommentWrapper = styled.div`
  margin-top: 10px;
  max-width: 690px;
  width: 100%;
  height: auto;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.backrground};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: row;
.user-photo {
  width: 60px;
  height: 60px;
  display: flex;
}
.user-photo img {
  object-fit: cover;
  height: 60px;
  width: 60px;
  border-radius: 30px;
}
.contents {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 0;
    line-height: 24px;
    font-weight: 600;
    color: #0D1821;
  }
  h4 {
    margin: 4px 0 0 0;
    font-size: 12px;
    line-height: 18px;
    color: #B9BAC3;
  }
  p {
    margin: 9px 0 0 0;
    line-height: 24px;
    color: #344966;
  }
}
`;

export default OneCommentWrapper;
