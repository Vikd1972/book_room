import styled from 'styled-components';

const CartWrapper = styled.div`
max-width: 1280px;
width: 100%;
.total {
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  margin: 10px 0 0 0;
  color: #0D1821;
}
.buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
.navi {
  font-size: 16px;
  line-height: 28px;
  font-weight: 600;
  padding: 10px 50px;
  color: #344966;
  border: 1px solid #344966;
  border-radius: 16px;
  text-decoration: none;
}
.button {
  margin-left: 20px;
  max-width: 174px;
  width: 100%;
}
`;

export default CartWrapper;
