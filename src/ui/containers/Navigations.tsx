import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Signup from '../pages/SignUp/Signup';
import Catalog from '../pages/Catalog/Catalog';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Cart from '../pages/Cart/Cart';
import DetailBook from '../pages/DetailBook/DetailBook';
import Favorites from '../pages/Favorites/Favorites';
import User from '../pages/User/User';
import Layout from './Layout';

type RouteType = {
  path: string;
  element: React.FC;
  requiredIsAuth?: boolean;
  redirectTo?: string;
};

const routes: RouteType[] = [
  {
    path: '/',
    requiredIsAuth: false,
    element: Catalog,
  },
  {
    path: '/detail/:bookId',
    requiredIsAuth: false,
    element: DetailBook,
  },
  {
    path: '/login',
    requiredIsAuth: false,
    element: Login,
  },
  {
    path: '/signup',
    requiredIsAuth: false,
    element: Signup,
  },
  {
    path: '/profile',
    element: User,
    requiredIsAuth: true,
  },
  {
    path: '/cart',
    element: Cart,
    requiredIsAuth: true,
  },
  {
    path: '/favorites',
    element: Favorites,
    requiredIsAuth: true,
  },
];

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={!route.requiredIsAuth
              ? (
                <route.element />
              ) : (
                <PrivateRoute>
                  <route.element />
                </PrivateRoute>
              )}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Navigation;
