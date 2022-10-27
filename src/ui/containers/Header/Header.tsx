import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';
import { AxiosError } from 'axios';
import showToast from '../../../validation/showToast';
import { addCart } from '../../../store/usersSlice';
import { loadSearchText } from '../../../store/booksSlice';
import getCart from '../../../api/cart/getCart';

import HeaderWrapper from './Header.styles';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const [searchText, setSearchText] = useState<string>('')
  const users = useAppSelector(state => state.users);
  const activePage = sessionStorage.getItem('activePage') || '1';

  useEffect(() => {
    (async () => {
      try {
        if (users.user.email) {
          const cart = await getCart(users.user.id)
          dispatch(addCart(cart))
        }
      }
      catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [users.user.id, users.user.email, dispatch]);

  const count = Array.from(users.cart).reduce((sum, item) => sum + item.count, 0);

  const favorites = users.userFavorites.length;

  const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  const onSendingSearchText = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loadSearchText(searchText))
    setSearchText('')
  }

  return (
    <HeaderWrapper>
      <header className='top-panel'>
        <Link
          className="panel__logotype"
          to={`/${activePage}`}>
        </Link>
        <form
          onSubmit={onSendingSearchText}>
          <div className='panel__search'>Catalog</div>
          <div className='search-icon'></div>
          <div className='search__width-setter'>
            <div className='search__searchfield'>
              <input
                name='catalog'
                type='text'
                value={searchText}
                onChange={onSearchText}
                placeholder='Search'>
              </input>
            </div>
          </div>
        </form>
        {users.user.email ?
          <nav className='panel__buttons'>
            <Link
              className="buttons-icon btn-cart"
              to="/cart">
            </Link>
            {count ? <div id='cart'>{count}</div> : null}
            <Link
              className="buttons-icon btn-save"
              to="/favorites">
            </Link>
            {favorites ? <div id='cart'>{favorites}</div> : null}
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