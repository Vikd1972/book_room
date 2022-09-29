import React from 'react';
import Heading from './Header.styled';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../Store/hooks';
import { useAppSelector } from '../../Store/hooks';
import { loging } from '../../Store/booksSlice';

export const Header: React.FC = () => { 
  const dispatch = useAppDispatch()
  const isLogged = useAppSelector(state => state.books.isLogged)  

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(
      loging(false)
    );
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
        {isLogged ?
          <div className='buttons'>
            <Link
              className="buttons-icon btn-cart"
              to="/cart">             
            </Link>            
            <Link
              className="buttons-icon btn-save"
              onClick={logout} //a temporary solution for testing protected routes
              to="/">     
            </Link>
            <Link
              className="buttons-icon btn-user"
              to="/acc">         
            </Link>
          </div> :
          <Link
            className="btn"
            to="/login">
            Log In / Sing Up
          </Link>
        }
      </div>  
    </Heading>
  );
}

export default Header