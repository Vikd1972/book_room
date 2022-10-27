import React from 'react';
import { Link } from "react-router-dom";

import { useAppDispatch } from '../../../store/hooks';
import { reset } from '../../../store/usersSlice';

import FooterWrapper from './Footer.styles';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const activePage = sessionStorage.getItem('activePage') || '1'

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(reset())
  }

  return (
    <FooterWrapper>
      <div className='logo'>
        <div className='logo-logotype'></div>
        <div className='logo-contacts'>
          tranthuy.nute@gmail.com <br />
          (480) 555-0103
        </div>
      </div>
      <nav className='links'>
        <Link
          className="navi"
          to={`/${activePage}`}>
          Home Page
        </Link>
        <Link
          className="navi"
          to={`/${activePage}`}>
          Catalog
        </Link>
        <Link
          className="navi"
          to="/profile">
          My Account
        </Link>
        <Link
          className="navi"
          to="/cart">
          Cart
        </Link>
        <Link
          className="navi"
          onClick={logout} //a temporary solution for testing application
          to={`/${activePage}`}>
          Log Out
        </Link>
      </nav>
      <div className='map'>
        <span className='map-address'>
          6391 Elgin St. Celina, Delaware 10299
        </span>
        <div className='map-map'></div>
      </div>
    </FooterWrapper>
  );
}

export default Footer