/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { useAppSelector } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';

import logo from '../../assets/picture/logo_dark.png';
import search from '../../assets/picture/search.png';
import cart from '../../assets/picture/cart.png';
import heart from '../../assets/picture/heart.png';
import user from '../../assets/picture/user_profile.png';

import HeaderWrapper from './Header.styles';

export const Header: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = useAppSelector((state) => state.books.queryString);
  const users = useAppSelector((state) => state.users);

  const [searchText, setSearchText] = useState<string>('');
  const count = Array.from(users.cart).reduce((sum, item) => sum + item.count, 0);
  const favorites = users.favorites.length;

  const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSendingSearchText = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchText.length
      ? searchParams.set('search', searchText)
      : searchParams.delete('search');

    setSearchParams(searchParams);
    setSearchText('');
  };

  return (
    <HeaderWrapper
    >
      <Link
        className="panel__logotype"
        to={`/${queryString}`}
      >
        <img
          src={logo}
          alt="logo"
        />
      </Link>
      <p className="search__title">Catalog</p>
      <form
        className="search__field"
        onSubmit={onSendingSearchText}
      >
        <div className="search__field-icon">
          <img
            src={search}
            alt="search"
          />
        </div>
        <div className="search__input">
          <input
            name="catalog"
            type="text"
            value={searchText}
            onChange={onSearchText}
            placeholder="Search"
          />
        </div>
      </form>
      {users.user.email
        ? (
          <nav className="panel__buttons">
            <Link
              className="button__icon"
              to="/cart"
            >
              <img
                src={cart}
                alt="cart"
              />
            </Link>
            {count ? <div className="counter">{count}</div> : null}
            <Link
              className="button__icon"
              to="/favorites"
            >
              <img
                src={heart}
                alt="heart"
              />
            </Link>
            {favorites ? <div className="counter">{favorites}</div> : null}
            <Link
              className="button__icon"
              to="/profile"
            >
              <img
                src={user}
                alt="user profile"
              />
            </Link>
          </nav>
        ) : (
          <div>
            <form action="/login">
              <Button
                type="submit"
                className="button"
                text="Log In/Sing Up"
              />
            </form>
          </div>
        )
      }
    </HeaderWrapper>
  );
};

export default Header;
