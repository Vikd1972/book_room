import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { useAppSelector } from '../../Store/hooks';
import { useAppDispatch } from '../../Store/hooks';
import { loginUser, loging } from '../../Store/booksSlice';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Bookroom from './Bookroom.styled';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import Catalog from '../catalog/Catalog';

export const BookRoom: React.FC = () => {
  const user = useAppSelector(state => state.books.user);
  const dispatch = useAppDispatch()
  const isLogged = useAppSelector(state => state.books.isLogged)
  
  if (!user.id && !localStorage.token) {
    dispatch(
      loging(false)
    );
  } else {
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
    

  return (
    <Router>
      <Bookroom className="bookroom">
        <Header />
        {!isLogged ?
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Signup />} />
          </Routes> : 
          <Catalog />}
     
        <Footer />            
      </Bookroom>
    </Router>
  );
}

export default BookRoom;