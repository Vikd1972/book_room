import styled from 'styled-components';

const CartWrapper = styled.div`
max-width: 1280px;
width: 100%;
.total {
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  margin-top: 10px;
  color: #0D1821;
}
.buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
}
.continue-shopping {
  font-weight: 600;
  padding: 10px 50px;
  color: #344966;
  border: 1px solid #344966;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  margin-right: 20px;
}
.button {
  width: 174px;
}
`;

export default CartWrapper;
