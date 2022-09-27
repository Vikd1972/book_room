import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import { useAppSelector } from '../../Store/hooks';
import { useAppDispatch } from '../../Store/hooks';
import { loginUser } from '../../Store/booksSlice';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import Bookroom from './Bookroom.styled';
import Login from '../login/Login';
import Signup from '../signup/Signup';

export const BookRoom: React.FC = () => {
  const user = useAppSelector(state => state.books.user);
  const dispatch = useAppDispatch()
  
  if (!user.id && localStorage.token) {
    axios
    .post("http://localhost:3001/api/auth/token/", {
      token: localStorage.token,
    })
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(
          loginUser({
            id: res.data.user.id,
            fullname: res.data.user.fullname,
            email: res.data.user.email,
          })
          )
        })
      .catch(function (err) {
        console.log(err.response);
      });
  };
  
  // console.log(user.id);
  // console.log(localStorage.getItem('token'));
  

  return (
    <Router>
      <Bookroom className="bookroom">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Signup />} />
        </Routes>   

        <Footer />            
      </Bookroom>
    </Router>
  );
}

export default BookRoom;