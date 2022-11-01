import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAppDispatch } from './store/hooks';
import { loginUser } from './store/usersSlice';
import restoreUser from './api/auth/restoreUser';
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
        const user = await restoreUser();
        dispatch(loginUser(user));
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
    <Router>
      <AppWrapper className="bookroom">
        <Navigation />
        <ToastContainer
          className="toast"
          bodyClassName="toast-body"
        />
      </AppWrapper>
    </Router>
  );
};

export default App;
