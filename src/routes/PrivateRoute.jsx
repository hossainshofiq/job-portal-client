import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);

    if(loading){
        return <span className="loading loading-spinner loading-lg mx-auto"></span>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location?.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;