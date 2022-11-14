import styled from 'styled-components';

const CommentsWrapper = styled.div`
margin-top: 110px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
@media (max-width: 1440px) {
  margin-top: 88px;
  max-width: 805px;
}
@media (max-width: 834px) {
  margin-top: 50px;
  max-width: 290px;
}
h1 {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  margin: 0 0 40px 0;
  @media (max-width: 834px) {
    display: none;
  }
}
form {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  max-width: 770px;
  width: 100%;
  @media (max-width: 834px) {
    margin-top: 20px;
  }
}
.comments-input {
  max-width: 690px;
  width: 100%;
  height: 128px;
}
.comments-input textarea {
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  resize: none;
  width: 100%;
  height: 88px;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.backrground};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  outline: none;
  @media (max-width: 834px) {
    padding: 15px 15px;
    width: 260px;
  }
}
.button {
  margin-top: 40px;
  width: 276px;
  font-size: 20px;
  line-height: 30px;
  @media (max-width: 1440px) {
    margin-top: 30px;
  }
  @media (max-width: 834px) {
    margin-top: 20px;
    width: 210px;
    font-size: 12px;
    line-height: 18px;
  }
}
`;

export default CommentsWrapper;
