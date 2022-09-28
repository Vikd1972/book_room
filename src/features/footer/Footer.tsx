import React from 'react';
import { Link } from "react-router-dom";
import Basement from './Footer.styled';

export const Footer: React.FC = () => {
  return (
    <Basement>    
      <div className='logo'>
        <div className='logo-logotype'></div>
        <div className='logo-contacts'>
          tranthuy.nute@gmail.com <br />
          (480) 555-0103
        </div>
      </div>
      <div className='links'>
        <div>
          <Link
            className="btn"
            to="/">
            Home Page
          </Link>
        </div>
        <div>
          <Link
            className="btn"
            to="/">
            Catalog
          </Link>
        </div>
        <div>
          <Link
            className="btn"
            to="/acc">
            My Account
          </Link>
        </div>
        <div>
          <Link
            className="btn"
            to="/cart">
            Cart
          </Link>
        </div>
      </div>
      <div className='map'>
        <div className='map-address'>
          6391 Elgin St. Celina, Delaware 10299
        </div>
        <div className='map-map'></div>
      </div>   
    </Basement>
  );
}

export default Footer