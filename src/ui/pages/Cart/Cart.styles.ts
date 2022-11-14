import styled from 'styled-components';

const CartWrapper = styled.div`
max-width: 1280px;
width: 100%;
@media (max-width: 1440px) {
  width: 805px;
}
@media (max-width: 834px) {
  width: 290px;
}
.total {
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
  margin-top: 10px;
  color: #0D1821;
  @media (max-width: 834px) {
    font-size: 24px;
    line-height: 36px;
  }
}
.buttons {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 28px;
  @media (max-width: 834px) {
    margin-top: 20px;
    flex-direction: column;
    width: 290px;
    font-size: 12px;
    line-height: 28px;
  }
}
.continue-shopping {

  font-weight: 600;
  padding: 10px 50px;
  color: #344966;
  border: 1px solid #344966;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  margin-right: 20px;
  @media (max-width: 834px) {
    padding: 2px 0;
    text-align: center;
    margin-right: 0;
  }
}
.button {
  width: 174px;
  @media (max-width: 834px) {
    margin-top: 20px;
    padding: 3px 0;
    font-size: 12px;
    line-height: 28px;
    width: 100%;
  }
}
`;

export default CartWrapper;
