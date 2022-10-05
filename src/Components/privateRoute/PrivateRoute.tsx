import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from '../../Store/hooks';

const PrivateRoute = ({ children, ...rest }: any) => {
  const location = useLocation()
  
  const isLogged = useAppSelector(state => state.users.isLogged)

  return isLogged ? children : <Navigate to="/login" state={ location.pathname } />;
}

export default PrivateRoute;