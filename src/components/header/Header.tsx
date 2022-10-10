import React from 'react';
import Heading from './Header.styled';
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
        {user.email ?
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