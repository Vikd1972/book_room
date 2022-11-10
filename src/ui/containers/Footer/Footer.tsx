import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { reset } from '../../../store/usersSlice';

import logo from '../../assets/picture/logo_light.png';
import map from '../../assets/picture/map.png';

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
        <div className="logo__image">
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <p className="logo__contacts">tranthuy.nute@gmail.com </p>
        <p className="logo__contacts">(480) 555-0103</p>
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
        <p className="map__address">
          6391 Elgin St. Celina, Delaware 10299
        </p>
        <div className="map__image">
          <img
            src={map}
            alt="map"
          />
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
