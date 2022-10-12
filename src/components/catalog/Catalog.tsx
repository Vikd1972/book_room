import React from 'react';

import CatalogFilter from './catalogFilter/CatalogFilter';
import СatalogWrapper from './Catalog.styles';
import { ButtonSubmit } from '../componentsUI/button/Buttons';

export const Catalog: React.FC = () => {
  return (
    <СatalogWrapper>
      <div className='poster'>
        <div className='poster__field'>
          <div className='field-name'>Build your library with us</div>
          <div className='field-text'>Buy two books and<br/>get one for free</div>
          <ButtonSubmit
            width='230px'
            text='Choose a book'
          />
        </div>
        <div className='poster__image'></div>
      </div>
      <CatalogFilter />
      <div className='books'></div>
      <div className='auth-now'></div>
    </СatalogWrapper >
  );
}

export default Catalog