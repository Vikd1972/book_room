import React from 'react';
import Heading from './Header.styled';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from '../login/Login';
import Signup from '../signup/Signup';


export const Header: React.FC = () => { 

  return (
    <Router>
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
            to="/login">
            Log In / Sing Up
          </Link>
        </div>
  
      </Heading>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>    

    </Router>
  );
}

export default Header