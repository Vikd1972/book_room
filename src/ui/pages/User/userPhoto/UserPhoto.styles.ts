import styled from 'styled-components';

const UserPhotoWrapper = styled.div`
max-width: 1280px;
display: flex;
flex-direction: row;
.user-photo {
  width: 305px;
  height: 305px;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F0F4EF;
}
.user-photo img {
  height: auto;
  width: auto;
}
#output {
  display: inline-block;
  max-width: 100%;
  width: auto;
  max-height: 100%;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
}
.button {
  position: absolute;
  margin-left: 237px;
  margin-top: -68px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #344966;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.button:hover {
  background-color: #0D1821;
}
.input-field {
  cursor: pointer;
  position: absolute;
  opacity: 0;
  margin-left: 0; 
  width: 48px;
  height: 48px;
  z-index: 9999;
}
.toast {
  width: 400px;
}
.toast-body {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  color: #ff9999;
}
`;
export default UserPhotoWrapper;
