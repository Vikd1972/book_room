import React from 'react';
import Heading from './Header.styles';
import { Link } from "react-router-dom";
import { useAppDispatch } from '../../store/hooks';
import { useAppSelector } from '../../store/hooks';
import { loginUser } from '../../store/usersSlice';
import { ButtonLink } from '../componentsUI/button/Buttons';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user)

  const logout = () => {
    localStorage.removeItem('token');
    dispatch(
      loginUser({
        id: 0,
        fullname: '',
        email: '',
        photoFilePath: '',
      })
    )
  }

  return (
    <Heading>
      <header className='top-panel'>
        <div className='panel__logotype'></div>
        <form>
          <div className='panel__search'>Catalog</div>
          <div className='search-icon'></div>
          <div className='search__width-setter'>
            <div className='search__searchfield'>
              <input
                name='catalog'
                type='text'
                placeholder='Search'>
              </input>
            </div>
          </div>
        </form>
        {user.email ?
          <nav className='panel__buttons'>
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
              to="/user_profile">
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