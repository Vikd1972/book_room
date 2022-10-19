import React, { useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AxiosError } from 'axios';

import { useAppDispatch } from './store/hooks';
import { loginUser } from './store/usersSlice';
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
import showToast from './validation/showToast';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  const activePage = '1';
  const dispatch = useAppDispatch()
  const [isInit, setIsInit] = useState(false)
  // const navigate = useNavigate()
  // navigate("/1")
  
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
          <Route path="/" element={<Navigate to="/1" />} />

          <Route path="/:activePage" element={<Catalog />} />

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/detail/:bookId" element={<DetailBook />} />

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

