import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { reset } from '../../../store/usersSlice';

import FooterWrapper from './Footer.styles';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const queryString = useAppSelector((state) => state.books.queryString);

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(reset());
  };

  return (
    <FooterWrapper>
      <div className="logo">
        <div className="logo-logotype" />
        <p className="logo-contacts">tranthuy.nute@gmail.com </p>
        <p className="logo-contacts">(480) 555-0103</p>
      </div>
      <nav className="links">
        <Link
          className="navi"
          to={`/${queryString}`}
        >
          Home Page
        </Link>
        <Link
          className="navi"
          to={`/${queryString}`}
        >
          Catalog
        </Link>
        <Link
          className="navi"
          to="/profile"
        >
          My Account
        </Link>
        <Link
          className="navi"
          to="/cart"
        >
          Cart
        </Link>
        <Link
          className="navi"
          onClick={logout}
          to={`/${queryString}`}
        >
          Log Out
        </Link>
      </nav>
      <div className="map">
        <span className="map-address">
          6391 Elgin St. Celina, Delaware 10299
        </span>
        <div className="map-picture" />
      </div>
    </FooterWrapper>
  );
};

export default Footer;
