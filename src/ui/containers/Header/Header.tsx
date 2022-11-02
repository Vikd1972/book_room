/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosError } from 'axios';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';
import showToast from '../../../validation/showToast';
import { addCart } from '../../../store/usersSlice';
import getCart from '../../../api/cart/getCart';
import { loadQueryString } from '../../../store/booksSlice';

import HeaderWrapper from './Header.styles';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchText, setSearchText] = useState<string>('');
  const users = useAppSelector((state) => state.users);
  const queryString = useAppSelector((state) => state.books.queryString);
  const url = new URL(window.location.href);

  useEffect(() => {
    (async () => {
      try {
        if (users.user.email) {
          const cart = await getCart();
          dispatch(addCart(cart));
        }
      } catch (err) {
        if (err instanceof AxiosError) {
          showToast(err.message);
        }
      }
    })();
  }, [users.user.id, users.user.email, dispatch]);

  const count = Array.from(users.cart).reduce((sum, item) => sum + item.count, 0);
  const favorites = users.userFavorites.length;

  const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSendingSearchText = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchText.length) {
      console.log(searchText);
      if (url.searchParams.has('search')) {
        url.searchParams.set('search', searchText);
      } else {
        url.searchParams.append('search', searchText);
      }
    } else {
      url.searchParams.delete('search');
    }
    dispatch(loadQueryString(url.search));
    setSearchText('');
  };

  return (
    <HeaderWrapper>
      <header className="top-panel">
        <Link
          className="panel__logotype"
          to={`/${queryString}`}
        />
        <form
          onSubmit={onSendingSearchText}
        >
          <div className="panel__search">Catalog</div>
          <div className="search-icon" />
          <div className="search__width-setter">
            <div className="search__searchfield">
              <input
                name="catalog"
                type="text"
                value={searchText}
                onChange={onSearchText}
                placeholder="Search"
              />
            </div>
          </div>
        </form>
        {users.user.email
          ? (
            <nav className="panel__buttons">
              <Link
                className="buttons-icon button-cart"
                to="/cart"
              />
              {count ? <div id="cart">{count}</div> : null}
              <Link
                className="buttons-icon button-favorite"
                to="/favorites"
              />
              {favorites ? <div id="cart">{favorites}</div> : null}
              <Link
                className="buttons-icon button-user"
                to="/profile"
              />
            </nav>
          ) : (
            <div>
              <form action="/login">
                <Button
                  type="submit"
                  className="button"
                  text="Log In / Sing Up"
                />
              </form>
            </div>
          )
        }
      </header>
    </HeaderWrapper>
  );
};

export default Header;
