import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import HeaderWrapper from './Header.styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../componentsUI/button/Buttons';
import { AxiosError } from 'axios';
import showToast from '../../validation/showToast';
import { addCart, reset } from '../../store/usersSlice';
import getCart from '../../api/cart/getCart';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user);
  const cart = useAppSelector(state => state.users.cart);
  const activePage = sessionStorage.getItem('activePage') || '1';

  useEffect(() => {
    (async () => {
      try {
        const cart = await getCart(user.id)
        dispatch(addCart(cart))
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, []);

  const count = Array.from(cart).reduce((sum, item) => sum + item.count, 0);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(reset())
  }

  return (
    <HeaderWrapper>
      <header className='top-panel'>
        <a
          href={`/${activePage}`}
          className='panel__logotype'>
        </a>
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
            {count ? <div id='cart'>{count}</div> : null}
            <Link
              className="buttons-icon btn-save"
              onClick={logout} //a temporary solution for testing application
              to={`/${activePage}`}>
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