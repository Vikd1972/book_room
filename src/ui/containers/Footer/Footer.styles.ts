import styled from 'styled-components';

const FooterWrapper = styled.div`
margin-top: 104px;
max-width: 1280px;
width: 100%;
height: 268px;
padding: 73px 80px 0 80px;
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: #0D1821;
color: #F0F4EF;
font-size: 20px;
line-height: 30px;
@media (max-width: 1440px) {
  max-width: 805px;
  padding: 73px 20px 78px;
  height: auto;
  font-size: 16px;
  line-height: 24px;
}
@media (max-width: 834px) {
  max-width: 290px;
  margin-top: 100px;
  flex-direction: column;
  padding: 73px 15px 30px;
}
.logo {
  display: flex;
  flex-direction: column;
}
.logo__image {
  width: 88px;
  height: 46px;
  margin-bottom: 40px;
  @media (max-width: 1440px) {
    margin-bottom: 30px;
  }
}
.logo__contacts {
  margin: 0;
}
.links {
  display: flex;
  flex-direction: column;
  @media (max-width: 834px) {
    margin-top: 40px;
  }
}
.navi {
  color: #F0F4EF;
  text-decoration: none;
  margin-bottom: 5px;
  line-height: 35px;
  @media (max-width: 1440px) {
    line-height: 24px;
    margin-bottom: 11px;
  }
}
.map {
  @media (max-width: 834px) {
    width: 290px;
    margin-top: 40px;
  }
}
.map__address {
  margin: 0;
}
.map__image {
  width: 413px;
  height: 160px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  @media (max-width: 1440px) {
    width: 392px;
    height: 160px;
    overflow: hidden;
  }
  @media (max-width: 834px) {
    width: 290px;
    height: 160px;
  }
}
.map__image img {
  @media (max-width: 1440px) {
    width: auto;
    height: 100%;
  }
  @media (max-width: 834px) {
    width: auto;
    height: 100%;
  }
}
`;

export default FooterWrapper;
