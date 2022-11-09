import styled from 'styled-components';

const CommentsWrapper = styled.div`
margin-top: 110px;
max-width: 1280px;
width: 100%;
display: flex;
flex-direction: column;
h1 {
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  margin: 0;
}
.comments-books {
  margin-top: 40px;
}
form {
  margin-top: 60px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  max-width: 770px;
  width: 100%;
}
.comments-width {
  max-width: 690px;
  width: 100%;
  height: 128px;
}
.comments-input {
  height: 128px;
}
.comments-input textarea {
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  resize: none;
  width: 100%;
  height: 88px;
  padding: 20px 24px;
  border-radius: 16px;
  background-color: #F0F4EF;
  border: none;
  outline: none;
}
.button {
  margin-top: 40px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  width: 276px;
  padding: 10px 0;
}
`;

export default CommentsWrapper;
