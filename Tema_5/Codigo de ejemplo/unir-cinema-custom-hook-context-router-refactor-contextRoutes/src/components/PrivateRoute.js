import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        // Se redirige a /login y se pasa la ruta actual en el estado ("from")
        return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    return children;
};

export default PrivateRoute;
