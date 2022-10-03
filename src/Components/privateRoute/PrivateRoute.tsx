import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from '../../Store/hooks';

const PrivateRoute = ({ children, ...rest }: any) => {
  const isLogged = useAppSelector(state => state.users.isLogged)
  return isLogged ? children : <Navigate to="/login" state={{ from: rest }} />;
}

export default PrivateRoute;