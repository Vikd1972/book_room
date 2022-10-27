import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import { useAppDispatch } from './store/hooks';
import { loginUser } from './store/usersSlice';
import Header from './ui/containers/Header/Header';
import Login from './ui/pages/Login/Login';
import Signup from './ui/pages/SignUp/Signup';
import Catalog from './ui/pages/Catalog/Catalog';
import PrivateRoute from './ui/containers/PrivateRoute/PrivateRoute';
import Cart from './ui/pages/Cart/Cart';
import DetailBook from './ui/pages/DetailBook/DetailBook';
import Favorites from './ui/pages/Favorites/Favorites';
import User from './ui/pages/User/User';
import Footer from './ui/containers/Footer/Footer';
import getUser from './api/auth/restoreUser';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const [isInit, setIsInit] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsInit(true)
      return;
    }
    (async () => {
      try {
        const user = await getUser()
        dispatch(loginUser(user))
      }
      catch (err) {
        console.log(err);
      }
      finally {
        setIsInit(true);
      }
    })();

  }, [dispatch]);

  if (!isInit) {
    return null
  }

  return (
    <Router>
      <AppWrapper className="bookroom">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/1" />} />

          <Route path="/:activePage" element={<Catalog />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/detail/:bookId" element={<DetailBook />} />

          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>}
          />

          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>}
          />

          <Route path="/profile" element={
            <PrivateRoute>
              <User />
            </PrivateRoute>}
          />
        </Routes>
        <Footer />
        <ToastContainer
          className='toast'
          bodyClassName='toast-body' />
      </AppWrapper>
    </Router>
  );
}

export default App;

