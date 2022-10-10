import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from '../../store/hooks';
import { useAppDispatch } from '../../store/hooks';
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
  const dispatch = useAppDispatch()
  const [isLogged, setIsLogged] = useState(false)

  const user = useAppSelector(state => state.users.user);

  if (!isLogged && localStorage.token) {
      const checkToken = async () => {
        const user = await getUser()        
        dispatch(loginUser(user))
      }
    checkToken()
    setIsLogged(true);
    };


  // if (isLogged) {
  //   return null
  // }

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
          <Route path="/acc" element={
            <PrivateRoute path="/acc">
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