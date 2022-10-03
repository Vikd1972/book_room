import React from 'react';
import Сatalogue from './Catalog.styled';

export const Catalog: React.FC = () => {
  return (
    <Сatalogue>
      <div className='poster'>
        <div className='poster__field'>
          <div className='field-name'>Build your library with us</div>
          <div className='field-text'>Buy two books and<br/>get one for free</div>
          <button className='field-btn'>Choose a book</button>
        </div>
        <div className='poster__image'></div>
      </div>
      <div className='sorting'></div>
      <div className='books'></div>
      <div className='auth-now'></div>
    </Сatalogue >
  );
}

export default Catalog