import React from 'react';
import Heading from './Header.styled';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../Store/hooks';
import { useAppSelector } from '../../Store/hooks';
import { loging, loginUser } from '../../Store/usersSlice';
import { ButtonLink } from '../componentsUI/button/Buttons';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLogged = useAppSelector(state => state.users.isLogged)

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(
      loging(false)
    );
    dispatch(
      loginUser({
        id: 0,
        fullname: '',
        email: '',
      })
    )
  }

  return (
    <Heading>
      <header className='logo'>
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
          <nav className='buttons'>
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
          </nav> :
          <ButtonLink
            to="/login"
            width='231px'
            text='Log In / Sing Up'
          />
        }
      </header>
    </Heading>
  );
}

export default Header