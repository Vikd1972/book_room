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
.logo {
  display: flex;
  flex-direction: column;
}
.logo__image {
  width: 88px;
  height: 46px;
  margin-bottom: 40px;
}
.logo__contacts {
  margin: 0;
}
.links {
  display: flex;
  flex-direction: column;
}
.navi {
  color: #F0F4EF;
  text-decoration: none;
  margin-bottom: 5px;
  line-height: 35px;
}
.map__address {
  margin: 0;
}
.map__image {
  width: 413px;
  height: 160px;
}
`;

export default FooterWrapper;
