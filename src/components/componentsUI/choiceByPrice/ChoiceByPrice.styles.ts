import styled from 'styled-components'

const СhoiceByPriceWrapper = styled.div`
position: absolute;
top: 50px;
left: 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
.slider-container {
  margin-top: 30px;
  width: 390px;
  height: auto;
  background-color: #F0F4EF;
  padding: 40px 25px;
  border-radius: 16px;
}
.slider {  
  width: 100%;
  height: 151px;
  border-radius: 16px;
  background-color: #F0F4EF; 
  color: #BFCC94;
  height: 12px;
}
.MuiSlider-rail {
  color: #D6D8E7;
  height: 12px;
}
.MuiSlider-track {
  color: #BFCC94;
  height: 12px;
}
.MuiSlider-thumb {
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid #BFCC94;
  background-color: #F0F4EF;
}
.value-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 34px;
  font-weight: 400;
}
`;

export default СhoiceByPriceWrapper