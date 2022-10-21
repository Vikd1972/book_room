import React from 'react';

import CatalogFilter from './catalogFilter/CatalogFilter';
import CatalogBooks from './catalogBooks/CatalogBooks';
import { Button } from '../componentsUI/button/Buttons';

import СatalogWrapper from './Catalog.styles';

export const Catalog: React.FC = () => {
  return (
    <СatalogWrapper>
      <div className='poster'>
        <div className='poster__field'>
          <div className='field-name'>Build your library with us</div>
          <div className='field-text'>Buy two books and<br/>get one for free</div>
          <Button
            type='submit'
            className="btn"
            text='Choose a book'
          />
        </div>
        <div className='poster__image'></div>
      </div>
      <CatalogFilter />
      <CatalogBooks />
    </СatalogWrapper >
  );
}

export default Catalog