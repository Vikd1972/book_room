import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks';

interface IChildren {
  children: JSX.Element;
}

const PrivateRoute: React.FC<IChildren> = ({ children }) => {
  const location = useLocation();
  const user = useAppSelector((state) => state.users.user);

  return user.email ? children : <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
