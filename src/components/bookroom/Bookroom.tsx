import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';

import 'react-toastify/dist/ReactToastify.css';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser } from '../../store/usersSlice';
import Header from '../header/Header';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Catalog from '../catalog/Catalog';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Cart from '../cart/cart';
import User from '../user/User';
import Footer from '../footer/Footer';
import getUser from '../../api/getUser';

import Bookroom from './Bookroom.styled';

export const BookRoom: React.FC = () => {
  const user = useAppSelector(state => state.users.user)
  const dispatch = useAppDispatch()
  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    if (localStorage.token) {
      (async () => {
        try {
          const user = await getUser()
          dispatch(loginUser(user))
        }
        catch (err) {
          console.log(err);
        }
        finally {
          setIsLogged(true);
        }
      })();
    } else {
      setIsLogged(true)
    }
  }, [dispatch]);

  if (!isLogged) {
    return null
  }

  return (
    <Router>
      <Bookroom className="bookroom">
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />

          <Route path="/cart" element={
            <PrivateRoute path="/cart">
              <Cart />
            </PrivateRoute>}
          />
          <Route path="/user_profile" element={
            <PrivateRoute path="/user_profile">
              <User />
            </PrivateRoute>}
          />
        </Routes>
        <Footer />
      </Bookroom>
    </Router>
  );
}

export default BookRoom;