import styled from 'styled-components';

const QuantityCangeWrapper = styled.div`  
margin-top: 50px;
height: auto;
display: flex;
flex-direction: row;
@media (max-width: 834px) {
  margin-top: 27px;
}
.quantity-change {
  width: 33px;
  height: 33px;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0F4EF;
}
.quantity-change:hover {
  background-color: #BFCC94;
}
.quantity-books {
  width: 12px;
  text-align: center;
  margin: 0 14px;
  font-size: 14px;
  font-weight: 600;
  line-height: 34px;
  @media (max-width: 834px) {
    margin: 0 2px;
  }
}
.removal {
  margin-left: 50px;
  background-color: transparent;
  @media (max-width: 834px) {
    margin-left: 20px;
  }
}
`;

export default QuantityCangeWrapper;
