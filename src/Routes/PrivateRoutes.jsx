import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoutes = ({ children }) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
   if(loading){
        return <Spinner
    color="info"
    aria-label="Loading Data"
       />
       
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;