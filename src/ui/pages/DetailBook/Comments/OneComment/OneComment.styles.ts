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
  @media (max-width: 1440px) {
    padding: 20px 20px;
    max-width: 627px;
  }
  @media (max-width: 834px) {
    margin-right: 0;
    padding: 13px 10px;
    max-width: 270px;
  }
.user-photo {
  width: 60px;
  height: 60px;
  display: flex;
  @media (max-width: 834px) {
    height: 35px;
    width: 35px;
  }
}
.user-photo img {
  object-fit: cover;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  @media (max-width: 834px) {
    height: 35px;
    width: 35px;
  }
}
.contents {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 834px) {
    margin-left: 13px;
  }
  h2 {
    margin: 0;
    line-height: 24px;
    font-weight: 600;
    color: #0D1821;
    @media (max-width: 834px) {
      font-size: 14px;
      line-height: 21px;
    }
  }
  h4 {
    margin: 4px 0 0 0;
    font-size: 12px;
    line-height: 18px;
    color: #B9BAC3;
    @media (max-width: 834px) {
      font-size: 10px;
      line-height: 15px;
    }
  }
  .comment-wrapper {
    @media (max-width: 834px) {
      margin-left: -48px;
      width: 270px;
    }
  }
  p {
    margin: 9px 0 0 0;
    line-height: 24px;
    color: #344966;
    @media (max-width: 834px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
}
`;

export default OneCommentWrapper;
