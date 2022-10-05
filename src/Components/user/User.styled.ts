import styled from 'styled-components'

import user_photo from '../../Utils/picture/user_photo.png'
import btn_photo from '../../Utils/picture/btn_photo.png'
import user from '../../Utils/picture/user.png'
import mail from '../../Utils/picture/mail.png'
import hide from '../../Utils/picture/hide.png'
import ok from '../../Utils/picture/ok.png'

const UserProfile = styled.div`
left: 0px;
margin-top: 60px;
margin-right: 330px;
max-width: 1280px;
display: flex;
flex-direction: row;
.user {
  max-width: 955px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: left;
}
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
.submit-sending {
  width: 48px;
  height: 48px;
  border: none;
  background: transparent;
  margin-left: -60px;
  background-image: url(${ok});
  background-repeat: no-repeat;
}
.user__info {
  margin-left: 128px;
  width: 522px;
  display: flex;
  flex-direction: column;
}
.user__info-personal {
  width: 100%;
  display: flex;
  flex-direction: column
}
.text {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-name {
  font-size: 20px;
  line-height: 30px;
  color: #0D1821;
}
.text-btn {
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
  color: #8D9F4F;
  text-decoration: underline;
  cursor: pointer;
}
.info {
  margin-top: 10px;
}
.field {
  margin-top: 20px;
  width: 100%;
  height: 64px;
  border-radius: 16px;
  background-color: #F0F4EF;
  color: #344966;
  display: flex;
  flex-direction: column;
}
.field-name {
  margin-top: 6px;
  margin-left: 64px;
  font-size: 14px;
  line-height: 24px;
}
.field-value {
  margin-left: 64px;
  font-size: 16px;
  line-height: 28px;
}
input {
  margin-left: 64px;
  font-size: 16px;
  line-height: 28px;
  background-color: transparent;
  border: none;
}
.info-fullname {
  background-image: url(${user});
  background-repeat: no-repeat;
  background-position: 24px 20px;
}
.info-email {
  background-image: url(${mail});
  background-repeat: no-repeat;
  background-position: 0 -3px;
}
.info-password {
  background-image: url(${hide});
  background-repeat: no-repeat;
  background-position: 24px 20px;
}
.user__info-password {
  margin-top: 40px;
}
.btn {
  margin-left: 128px;
  margin-top: 50px;
}
.err {
  color: #ff0000;
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

export default UserProfile