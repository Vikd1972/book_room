import styled from 'styled-components'

import user_photo from '../../utils/picture/user_photo.png'
import btn_photo from '../../utils/picture/btn_photo.png'
import user from '../../utils/picture/user.png'
import mail from '../../utils/picture/mail.png'
import hide from '../../utils/picture/hide.png'

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
  background-image: url(${user_photo});
  background-repeat: no-repeat;
}
.user__pic-btn {
  margin-left: 237px;
  margin-top: -68px;
  width: 48px;
  height: 48px;
  background-image: url(${btn_photo});
  background-repeat: no-repeat;
}
.user__pic-btn:hover {
  cursor: pointer;
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
  width: 170px;
  height: 44px;
  background-color: #344966;
  color: #F0F4EF;
  font-size: 16px;
  line-height: 24px;
  border-radius: 16px;
}
.btn:hover{
  cursor: pointer;
  background-color: #0D1821;
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