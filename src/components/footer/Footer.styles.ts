import styled from 'styled-components'

import logo from '../../utils/picture/logo_light.png'
import map from '../../utils/picture/map.png'

const Basement = styled.div`
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
.logo-logotype {
  width: 88px;
  height: 46px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  margin-bottom: 40px;
}
.btn {
  color: #F0F4EF;
  text-decoration: none;
  margin-bottom: 5px;
  line-height: 35px;
}
.map-map {
  width: 413px;
  height: 160px;
  background-image: url(${map});
  background-repeat: no-repeat;
}
`;

export default Basement