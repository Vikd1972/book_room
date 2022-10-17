import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

import HeaderWrapper from './Header.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reset } from '../../store/usersSlice';
import { Button } from '../componentsUI/button/Buttons';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const user = useAppSelector(state => state.users.user)

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(reset())
  }

  const returnToCatalog = () => {
    navigate('/')
  }

  return (
    <HeaderWrapper>
      <header className='top-panel'>
        <div
          onClick={returnToCatalog}
          className='panel__logotype'>
        </div>
        <form>
          <div className='panel__search'>Catalog</div>
          <div className='search-icon'></div>
          <div className='search__width-setter'>
            <div className='search__searchfield'>
              <input
                name='catalog'
                type='text'
                placeholder='Search'>
              </input>
            </div>
          </div>
        </form>
        {user.email ?
          <nav className='panel__buttons'>
            <Link
              className="buttons-icon btn-cart"
              to="/cart">
            </Link>
            <div id='cart'></div>
            <Link
              className="buttons-icon btn-save"
              onClick={logout} //a temporary solution for testing application
              to="/">
            </Link>
            <Link
              className="buttons-icon btn-user"
              to="/profile">
            </Link>
          </nav> :
          <div>
            <form action="/login">
              <Button
                type='submit'
                className='btn'
                text='Log In / Sing Up'
              />
            </form>
          </div>
        }
      </header>
    </HeaderWrapper>
  );
}

export default Header