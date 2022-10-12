import styled from 'styled-components'

import btn_photo from '../../../utils/picture/btn_photo.png'

const UserPhotoWrapper = styled.div`
max-width: 1280px;
display: flex;
flex-direction: row;
.user__pic-foto {
  width: 305px;
  height: 305px;
  border-radius: 16px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #F0F4EF;
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
.user__pic-foto img {
  height: auto;
  width: auto;
}
.user__pic-btn {
  position: absolute;
  margin-left: 237px;
  margin-top: -68px;
  width: 48px;
  height: 48px;
  background-image: url(${btn_photo});
  background-repeat: no-repeat;
  z-index: 9999;
}
.user__pic-input {
  position: absolute;
  opacity: 0;
  margin-left: 0; 
  width: 48px;
  height: 48px;
  z-index: 9999;
}
.user__pic-btn:hover {
  cursor: pointer;
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
export default UserPhotoWrapper