import React from 'react';

import CatalogFilter from './CatalogFilter/CatalogFilter';
import CatalogBooks from './CatalogBooks/CatalogBooks';
import { Button } from '../../components/Button/Buttons';

import woman from '../../assets/picture/woman.png';

import СatalogWrapper from './Catalog.styles';

export const Catalog: React.FC = () => {
  return (
    <СatalogWrapper>
      <div className="poster">
        <div className="poster__field">
          <h1 className="poster__field-name">Build your library with us</h1>
          <p className="poster__field-text">Buy two books and</p>
          <p className="poster__field-text">get one for free</p>
          <Button
            type="submit"
            className="button"
            text="Choose a book"
          />
        </div>
        <div className="poster__image">
          <img src={woman} alt="woman" />
        </div>
      </div>
      <CatalogFilter />
      <CatalogBooks />
    </СatalogWrapper >
  );
};

export default Catalog;
