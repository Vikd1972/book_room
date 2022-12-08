/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import React, { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { Button } from '../../components/Button/Buttons';
import { addNewComment } from '../../../store/booksSlice';

import logo from '../../assets/picture/logo_dark.png';
import search from '../../assets/picture/search.png';
import cart from '../../assets/picture/cart.png';
import heart from '../../assets/picture/heart.png';
import user from '../../assets/picture/user_profile.png';
import mail from '../../assets/picture/mail.png';

import HeaderWrapper from './Header.styles';

const socket = io('http://localhost:4001');

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = useAppSelector((state) => state.books.queryString);
  const users = useAppSelector((state) => state.users);
  const newComments = useAppSelector((state) => state.books.newComments);

  const idsFavorites = useMemo(() => {
    return users.favorites.map((item) => item.id);
  }, [users.favorites]);

  useEffect(() => {
    socket.on('comment', (...arg) => {
      if (idsFavorites.includes(arg[0].id)) {
        dispatch(addNewComment(arg[0]));
      }
    });
    return () => { socket.removeAllListeners('comment'); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [searchText, setSearchText] = useState<string>('');

  const quantityInCart = useMemo(() => {
    return users.cart.reduce((sum, item) => sum + item.count, 0);
  }, [
    users.cart,
  ]);

  const quantityNewComment = useMemo(() => {
    return newComments ? newComments.length : 0;
  }, [
    newComments,
  ]);

  const quantityFavorites = useMemo(() => {
    return users.favorites ? users.favorites.length : 0;
  }, [
    users.favorites,
  ]);

  const onSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSendingSearchText = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchText.trim()
      ? searchParams.set('search', searchText.trim())
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
              className="button__icon button__mail"
              to="/comment"
            >
              <img
                src={mail}
                alt="mail"
              />
            </Link>
            {quantityNewComment ? <div className="counter">{quantityNewComment}</div> : null}
            <Link
              className="button__icon"
              to="/cart"
            >
              <img
                src={cart}
                alt="cart"
              />
            </Link>
            {quantityInCart ? <div className="counter">{quantityInCart}</div> : null}
            <Link
              className="button__icon"
              to="/favorites"
            >
              <img
                src={heart}
                alt="heart"
              />
            </Link>
            {quantityFavorites ? <div className="counter">{quantityFavorites}</div> : null}
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
