import styled from 'styled-components'

import logo from '../picture/logo_light.png'
import map from '../picture/map.png'

const Basement = styled.div`
margin-top: 150px;
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
.links div {
  margin-bottom: 5px;
}
.btn {
  color: #F0F4EF;
  text-decoration: none;
}
.map-map {
  width: 413px;
  height: 160px;
  background-image: url(${map});
  background-repeat: no-repeat;
}
`;

export default Basement