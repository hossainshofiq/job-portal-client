import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    {/* <span className="loading loading-spinner loading-lg mx-auto"></span> */ }

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location?.pathname} to='/signIn'></Navigate>
};

export default PrivateRoute;