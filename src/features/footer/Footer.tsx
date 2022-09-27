import React from 'react';
import Basement from './Footer.styled';
import { Link } from "react-router-dom";

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
        <div>Home Page</div>
        <div>Catalog</div>
        <div>My Account</div>
        <div>Cart</div>
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