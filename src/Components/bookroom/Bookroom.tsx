import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from '../../Store/hooks';
import { useAppDispatch } from '../../Store/hooks';
import { loginUser, loging } from '../../Store/usersSlice';
import Header from '../header/Header';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Catalog from '../catalog/Catalog';
import PrivateRoute from '../privateRoute/PrivateRoute';
import Cart from '../cart/cart';
import User from '../user/User';
import Footer from '../footer/Footer';

import Bookroom from './Bookroom.styled';

export const BookRoom: React.FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.users.user);

  if (!user.id && !localStorage.token) {
    dispatch(
      loging(false)
    );
  } else {
    if (user.id === 0) {
      axios
        .post("http://localhost:3001/api/auth/token/", {
          token: localStorage.token,
        })
        .then((res) => {
          dispatch(
            loginUser({
              id: res.data.user.id,
              fullname: res.data.user.fullname,
              email: res.data.user.email,
            })
          )
          dispatch(
            loging(true)
          );
        })
        .catch(function (err) {
          console.log(err.response);
        });
    };
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