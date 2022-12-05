import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import bookroomTheme from './bookroomTheme';
import { useAppDispatch } from './store/hooks';
import { loginUser, setCart, setFavorites } from './store/usersSlice';
import getUserData from './api/auth/getUserData';
import Navigation from './ui/containers/Navigations';

import AppWrapper from './App.styles';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsInit(true);
      return;
    }
    (async () => {
      try {
        const userInfo = await getUserData();
        dispatch(loginUser(userInfo.user));
        dispatch(setCart(userInfo.userCart));
        dispatch(setFavorites(userInfo.favorites));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      } finally {
        setIsInit(true);
      }
    })();
  }, [dispatch]);

  if (!isInit) {
    return null;
  }

  return (
    <ThemeProvider theme={bookroomTheme}>
      <Router>
        <AppWrapper className="bookroom">
          <Navigation />
          <ToastContainer
            className="toast"
            bodyClassName="toast-body"
          />
        </AppWrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;
