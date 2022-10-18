import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AxiosError } from 'axios';

import { useAppDispatch } from './store/hooks';
import { addCart, loginUser, UserType } from './store/usersSlice';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Catalog from './components/catalog/Catalog';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Cart from './components/cart/Cart';
import DetailBook from './components/detailBook/DetailBook';
import User from './components/user/User';
import Footer from './components/footer/Footer';
import getUser from './api/users/getUser';
import getCart from './api/cart/getCart';
import showToast from './validation/showToast';
import { CartType } from './store/usersSlice';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const [isInit, setIsInit] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsInit(true)
    } else {
      (async () => {
        try {
          const user = await getUser()
          dispatch(loginUser(user))
        }
        catch (err) {
          if (err instanceof AxiosError) {
            showToast(err.message);
          }
        }
        finally {
          setIsInit(true);
        }
      })();
    }
  }, [dispatch]);

  if (!isInit) {
    return null
  }

  return (
    <Router>
      <AppWrapper className="bookroom">
        <Header />
        <Routes>
          <Route path="/" element={<Catalog />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/detail" element={<DetailBook />} />

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

