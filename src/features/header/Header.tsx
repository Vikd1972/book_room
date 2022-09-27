import React from 'react';
import Heading from './Header.styled';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../Store/hooks';
import { loging } from '../../Store/booksSlice';

export const Header: React.FC = () => { 
  const dispatch = useAppDispatch()
  
  const log = () => {  
    // dispatch(
    //   loging(true)
    // );
  }

  return (
    <Heading>
      <div className='logo'>
        <div className='logotype'></div>
        <form>
          <div className='logo__searchname'>Catalog</div>
          <div className='logo__width-setter'>
            <div className='logo__searchfield'>
              <input
                name='catalog'
                type='text'
                placeholder='Search'>
              </input>            
            </div>
          </div> 
        </form>
        <Link
          className="btn"
          onClick={log}
          to="/login">
          Log In / Sing Up
        </Link>
      </div>  
    </Heading>
  );
}

export default Header