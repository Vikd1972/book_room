import React from 'react';
import Header from '../header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from '../footer/Footer';
import Bookroom from './Bookroom.styled';
import Login from '../login/Login';
import Signup from '../signup/Signup';

export const BookRoom: React.FC = () => {
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